import { concatAttemptLetters } from './game';

describe('concatAttemptLetters', () => {
  it('should return empty array', () => {
    expect(concatAttemptLetters([], [])).toEqual([]);
  });

  it('should contain only second array when old array is empty', () => {
    const old = [];
    const received = [
      ['а', 1],
      ['б', -1],
    ];

    expect(concatAttemptLetters(old, received)).toEqual(received);
  });

  it('should contain only first array when received array is empty', () => {
    const old = [
      ['а', 1],
      ['б', -1],
    ];
    const received = [];

    expect(concatAttemptLetters(old, received)).toEqual(old);
  });

  it('should replace all duplicated items #1', () => {
    const old = [
      ['а', 1],
      ['б', 2],
      ['в', 3],
      ['г', 4],
      ['д', 5],
    ];

    const received = [
      ['а', 1],
      ['б', 2],
      ['в', 3],
      ['г', 4],
      ['д', 5],
    ];

    const joined = concatAttemptLetters(old, received);
    expect(joined.length).toBe(received.length);
    expect(joined).toEqual(expect.arrayContaining(old));
  });

  it('should replace all duplicated items #2', () => {
    const old = [
      ['а', 0],
      ['б', 0],
      ['в', 0],
      ['г', 0],
      ['д', 0],
    ];

    const received = [
      ['а', 0],
      ['б', 0],
      ['в', 0],
      ['г', 0],
      ['д', 0],
    ];

    const joined = concatAttemptLetters(old, received);
    expect(joined.length).toBe(received.length);
    expect(joined).toEqual(expect.arrayContaining(old));
  });

  it('should replace all duplicated items #3', () => {
    const old = [
      ['а', -1],
      ['б', -1],
      ['в', -1],
      ['г', -1],
      ['д', -1],
    ];

    const received = [
      ['д', -1],
      ['г', -1],
      ['в', -1],
      ['б', -1],
      ['а', -1],
    ];

    const joined = concatAttemptLetters(old, received);
    expect(joined.length).toBe(received.length);
    expect(joined).toEqual(expect.arrayContaining(old));
  });

  it('should replace all duplicated items #4', () => {
    const old = [
      ['а', -1],
      ['б', 0],
      ['в', -1],
      ['г', 0],
      ['д', 5],
    ];

    const received = [
      ['а', -1],
      ['б', 0],
      ['в', -1],
      ['г', 0],
      ['д', 5],
    ];

    const joined = concatAttemptLetters(old, received);
    expect(joined.length).toBe(received.length);
    expect(joined).toEqual(expect.arrayContaining(old));
  });

  it('should contain concated array of two unique arrays', () => {
    const old = [
      ['а', 1],
      ['б', 2],
      ['в', 3],
      ['г', 4],
      ['д', 5],
    ];

    const received = [
      ['е', 6],
      ['ё', 7],
      ['ж', 8],
      ['з', 9],
      ['и', 10],
    ];

    const result = [
      ['а', 1],
      ['б', 2],
      ['в', 3],
      ['г', 4],
      ['д', 5],
      ['е', 6],
      ['ё', 7],
      ['ж', 8],
      ['з', 9],
      ['и', 10],
    ];

    const joined = concatAttemptLetters(old, received);
    expect(joined.length).toBe(result.length);
    expect(joined).toEqual(expect.arrayContaining(result));
  });

  it('should concat only unique items', () => {
    const old = [
      ['а', 1],
      ['б', 2],
      ['в', 3],
      ['г', 4],
      ['д', -1],
    ];

    const received = [
      ['а', 1],
      ['б', 2],
      ['в', 3],
      ['г', 4],
      ['е', 5], // unique
    ];

    const result = [
      ['а', 1],
      ['б', 2],
      ['в', 3],
      ['г', 4],
      ['д', -1],
      ['е', 5],
    ];

    const joined = concatAttemptLetters(old, received);
    expect(joined.length).toBe(result.length);
    expect(joined).toEqual(expect.arrayContaining(result));
  });

  it('should replace all undefined items with defined', () => {
    const old = [
      ['а', 0],
      ['б', -1],
      ['в', 3],
      ['г', 0],
      ['д', 0],
    ];

    const received = [
      ['а', 1],
      ['б', -1],
      ['в', 3],
      ['г', 4],
      ['д', 5],
    ];

    const joined = concatAttemptLetters(old, received);
    expect(joined.length).toBe(received.length);
    expect(joined).toEqual(expect.arrayContaining(received));
  });
});
