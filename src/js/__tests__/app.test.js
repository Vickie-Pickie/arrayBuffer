import ArrayBufferConverter, { getBuffer } from '../app';

const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

test('Буффер конвертируется в сроку', () => {
  const buffer = getBuffer(data);
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  const received = converter.toString();
  expect(received).toEqual(data);
});
