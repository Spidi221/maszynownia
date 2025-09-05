import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useCopyToClipboard } from './use-copy-to-clipboard';

// Setup JSDOM environment for tests
import { JSDOM } from 'jsdom';
const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window as any;

// Mock the clipboard API
const mockClipboard = {
  writeText: vi.fn(),
};

Object.assign(navigator, {
  clipboard: mockClipboard,
});

// Mock document.execCommand for fallback testing
const mockExecCommand = vi.fn();
Object.assign(document, {
  execCommand: mockExecCommand,
});

describe('useCopyToClipboard Hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should initialize with copied false', () => {
    const { result } = renderHook(() => useCopyToClipboard());

    expect(result.current.copied).toBe(false);
    expect(typeof result.current.copyToClipboard).toBe('function');
    expect(typeof result.current.resetCopied).toBe('function');
  });

  it('should copy text to clipboard successfully', async () => {
    mockClipboard.writeText.mockResolvedValue(undefined);
    const { result } = renderHook(() => useCopyToClipboard());

    let copyResult: boolean = false;
    await act(async () => {
      copyResult = await result.current.copyToClipboard('test text');
    });

    expect(copyResult).toBe(true);
    expect(result.current.copied).toBe(true);
    expect(mockClipboard.writeText).toHaveBeenCalledWith('test text');
  });

  it('should reset copied state after delay', async () => {
    mockClipboard.writeText.mockResolvedValue(undefined);
    const { result } = renderHook(() => useCopyToClipboard(1000));

    await act(async () => {
      await result.current.copyToClipboard('test text');
    });

    expect(result.current.copied).toBe(true);

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(result.current.copied).toBe(false);
  });

  it('should handle successful copy and reset', async () => {
    mockClipboard.writeText.mockResolvedValue(undefined);
    const { result } = renderHook(() => useCopyToClipboard(1000));

    await act(async () => {
      await result.current.copyToClipboard('test text');
    });

    expect(result.current.copied).toBe(true);

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(result.current.copied).toBe(false);
  });
});