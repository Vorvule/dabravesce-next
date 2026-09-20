function removeAccents(text) {
  if (typeof text !== 'string') return text;

  const defaultDiacriticsRemovalMap = {
    а́: 'а',
    е́: 'е',
    ё́: 'ё',
    і́: 'і',
    í: 'і',
    о́: 'о',
    у́: 'у',
    ы́: 'ы',
    э́: 'э',
    ю́: 'ю',
    я́: 'я',
    А́: 'А',
    Е́: 'Е',
    Ё́: 'Ё',
    І́: 'І',
    О́: 'О',
    У́: 'У',
    Ы́: 'Ы',
    Э́: 'Э',
    Ю́: 'Ю',
    Я́: 'Я',
  };

  let result = text.normalize('NFC');
  for (const diacritic in defaultDiacriticsRemovalMap) {
    const re = new RegExp(diacritic, 'g');
    result = result.replace(re, defaultDiacriticsRemovalMap[diacritic]);
  }

  // Remove any remaining combining marks so that every accented letter is
  // stripped, including those not listed in the map above (e.g. з́).
  return result.replace(/\p{M}/gu, '');
}

export default removeAccents;
