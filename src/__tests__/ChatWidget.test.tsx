/**
 * ChatWidget tests — RED phase
 * These tests MUST fail before implementation exists.
 */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ChatWidget from '../components/ChatWidget';

// Mock fetch for API calls
global.fetch = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  (global.fetch as jest.Mock).mockResolvedValue({
    ok: true,
    body: new ReadableStream({
      start(controller) {
        controller.enqueue(new TextEncoder().encode('data: {"content":"Hi! I\'m Riley."}\n\n'));
        controller.enqueue(new TextEncoder().encode('data: [DONE]\n\n'));
        controller.close();
      },
    }),
  });
});

describe('ChatWidget', () => {
  it('renders a floating chat button', () => {
    render(<ChatWidget />);
    const button = screen.getByRole('button', { name: /chat/i });
    expect(button).toBeInTheDocument();
  });

  it('chat panel is hidden by default', () => {
    render(<ChatWidget />);
    expect(screen.queryByText(/How can I help/i)).not.toBeInTheDocument();
  });

  it('opens the chat panel when the button is clicked', async () => {
    render(<ChatWidget />);
    const user = userEvent.setup();
    const toggleBtn = screen.getByRole('button', { name: /chat/i });
    await user.click(toggleBtn);
    expect(screen.getByText(/How can I help/i)).toBeInTheDocument();
  });

  it('shows quick reply buttons when chat is open', async () => {
    render(<ChatWidget />);
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /chat/i }));

    expect(screen.getByText('How does it work?')).toBeInTheDocument();
    expect(screen.getByText('How fast can you close?')).toBeInTheDocument();
    expect(screen.getByText('What will you pay?')).toBeInTheDocument();
    expect(screen.getByText('Get an offer →')).toBeInTheDocument();
  });

  it('sends quick reply message when clicked', async () => {
    render(<ChatWidget />);
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /chat/i }));
    await user.click(screen.getByText('How does it work?'));

    expect(global.fetch).toHaveBeenCalledWith(
      '/api/chat',
      expect.objectContaining({
        method: 'POST',
        body: expect.stringContaining('How does it work?'),
      })
    );
  });

  it('allows typing and submitting a custom message', async () => {
    render(<ChatWidget />);
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /chat/i }));

    const input = screen.getByPlaceholderText(/type a message/i);
    await user.type(input, 'What areas do you buy in?');
    await user.keyboard('{Enter}');

    expect(global.fetch).toHaveBeenCalledWith(
      '/api/chat',
      expect.objectContaining({
        method: 'POST',
        body: expect.stringContaining('What areas do you buy in?'),
      })
    );
  });

  it('displays user message in the chat window', async () => {
    render(<ChatWidget />);
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /chat/i }));

    const input = screen.getByPlaceholderText(/type a message/i);
    await user.type(input, 'Hello there');
    await user.keyboard('{Enter}');

    expect(screen.getByText('Hello there')).toBeInTheDocument();
  });

  it('closes the chat panel with the close button', async () => {
    render(<ChatWidget />);
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /chat/i }));
    expect(screen.getByText(/How can I help/i)).toBeInTheDocument();

    const closeBtn = screen.getByRole('button', { name: /^close/i });
    await user.click(closeBtn);
    expect(screen.queryByText(/How can I help/i)).not.toBeInTheDocument();
  });
});
