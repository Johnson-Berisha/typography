const body = [
  'Why it improves UI',
  '',
  '*   Prevents tiny text on phones, massive text on ultrawides',
  '   ',
  '*   Removes most media queries',
  '   ',
  '*   Keeps visual hierarchy consistent',
  '   ',
  '*   Very easily responsive, without the need of @media queries',
  '   ',
  '    The way to use clamps is like this:',
  '   ',
  '    ```',
  '    font-size: clamp(min, preferred, max);',
  '    ```',
  '   ',
  '    Replace min, preferred and max with what values work for your website and boom!'
].join('\n');

function parseParagraph(paragraph) {
  const lines = paragraph.split('\n').map(l => l.trim()).filter(Boolean);
  const isBullet = (l) => /^([-*•]\s+|\d+[.)]\s+)/.test(l);
  const out = [];
  let i = 0;
  while (i < lines.length) {
    if (isBullet(lines[i])) {
      const items = [];
      while (i < lines.length && isBullet(lines[i])) {
        items.push(lines[i].replace(/^([-*•]\s+|\d+[.)]\s+)/, '').trim());
        i++;
      }
      for (const it of items) out.push({ type: 'li', content: it });
    } else {
      const textLines = [];
      while (i < lines.length && !isBullet(lines[i])) {
        textLines.push(lines[i]);
        i++;
      }
      out.push(textLines.join(' '));
    }
  }
  return out.length ? out : [paragraph];
}

function splitAndParse(item) {
  return item.split(/\n\s*\n/).filter(p => p.trim()).flatMap(p => parseParagraph(p));
}

console.log(JSON.stringify(splitAndParse(body), null, 2));
