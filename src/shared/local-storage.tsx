import { areStrings } from 'shared/type-guards';

enum localStorageKeys {
  folders = 'folders',
}

export function getFolders(): string[] {
  const savedFolders: string | null = localStorage.getItem(
    localStorageKeys.folders,
  );
  const parsedFolders: any = savedFolders && JSON.parse(savedFolders);

  return areStrings(parsedFolders) ? parsedFolders : [];
}

export function setFolders(folders: string[]): void {
  localStorage.setItem(localStorageKeys.folders, JSON.stringify(folders));
}
