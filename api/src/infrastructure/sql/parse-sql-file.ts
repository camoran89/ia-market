export const parseSqlFile = (content: string): Record<string, string> => {
  const lines = content.split(/\r?\n/);
  const queries: Record<string, string> = {};
  let currentKey: string | null = null;
  let currentValueLines: string[] = [];

  const commitCurrentQuery = () => {
    if (!currentKey) return;
    queries[currentKey] = currentValueLines.join(' ').trim();
    currentKey = null;
    currentValueLines = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('--')) continue;

    const separatorIndex = trimmed.indexOf(':');
    if (separatorIndex > 0) {
      commitCurrentQuery();
      currentKey = trimmed.slice(0, separatorIndex).trim();
      currentValueLines = [trimmed.slice(separatorIndex + 1).trim()];
      continue;
    }

    if (currentKey) {
      currentValueLines.push(trimmed);
    }
  }

  commitCurrentQuery();
  return queries;
};
