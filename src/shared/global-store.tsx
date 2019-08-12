import { BehaviorSubject } from "rxjs";
import { skip } from "rxjs/operators";

import { getFolders, setFolders } from "shared/local-storage";

export const foldersSubject = new BehaviorSubject<string[]>(getFolders());
foldersSubject
  .pipe(skip(1))
  .subscribe((folders: string[]) => setFolders(folders));
