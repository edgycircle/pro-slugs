function replaceSpecialCharacters(string) {
  const replacementMap = [
    ['ä', 'ae'],
    ['ö', 'oe'],
    ['ü', 'ue'],
    ['ß', 'ss']
  ];

  replacementMap.forEach(pair => {
    string = string.replace(pair[0], pair[1]);
  });

  return string;
}

export default function slug(string) {
  let slug = string;

  slug = slug.toLowerCase().trim();
  slug = replaceSpecialCharacters(slug);
  slug = slug.replace(/[\s_\-]+/g, '-');
  slug = slug.replace(/[^a-z0-9\-]/g, '');

  return slug;
}
