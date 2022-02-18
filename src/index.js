import './index.css';
import displayDate from './modules/dates.js';
import { libraryMessage } from './modules/display-books.js';
import events from './modules/dom-events.js';

setInterval(displayDate, 1000);
libraryMessage();
events();
