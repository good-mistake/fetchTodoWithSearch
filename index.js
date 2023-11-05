import { search } from "./searchInput.js";
import { get } from "./fetchitem.js";
import { LoadLocalStorage } from "./localStorage.js";
import { init } from "./userItemEnter.js";
get();
search();
init();
LoadLocalStorage();
