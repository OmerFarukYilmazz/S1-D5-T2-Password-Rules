const resetNeeded = require('./index.js');
// const resetNeeded = require('./solution.js');

describe('Şifre Kurallarında Değişiklik Testleri', () => {
  test("['Axy1', 'aytemiz123', 'eRDeM1234', 'Hatice12'] için ['Axy1', 'aytemiz123'] dönüyor mu?", () => {
    expect(
      resetNeeded(['Axy1', 'aytemiz123', 'eRDeM1234', 'Hatice12'])
    ).toEqual(['Axy1', 'aytemiz123']);
  });

  test("['Cxtbyd', 'Para1234', 'temiz12', 'mariyaRT', 'tel'] için ['tel', 'aytemiz123'] dönüyor mu?", () => {
    expect(
      resetNeeded(['Cxtbyd', 'Para1234', 'temiz12', 'mariyaRT', 'tel'])
    ).toEqual(['Cxtbyd', 'temiz12', 'tel']);
  });

  test('Uppercase içerir mi kontrolü yapıyor:', () => {
    expect(resetNeeded(['xytdbddea', 'abd194400', 'abt373734'])).toEqual([
      'xytdbddea',
      'abd194400',
      'abt373734',
    ]);
  });

  test('Lowercase içerir mi kontrolü yapıyor:', () => {
    expect(resetNeeded(['TELMASAORGU', 'AMERIKABIRLESIK'])).toEqual([
      'TELMASAORGU',
      'AMERIKABIRLESIK',
    ]);
  });

  test('En az 8 karakter kontrolü yapıyor:', () => {
    expect(resetNeeded(['12345', '123', '3456'])).toEqual([
      '12345',
      '123',
      '3456',
    ]);
  });

  test('Boş array için doğru sonucu dönüyor mu?', () => {
    expect(resetNeeded([])).toEqual([]);
  });

  test('Fonksiyonun dönüş değeri number mı?', () => {
    const result = resetNeeded(['Axy1', 'aytemiz123', 'eRDeM1234', 'Hatice12']);
    expect(Array.isArray(result)).toBe(true);
  });
});