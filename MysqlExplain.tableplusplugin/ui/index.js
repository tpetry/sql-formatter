import Alpine from 'alpinejs';
import Clipboard from '@ryangjchandler/alpine-clipboard';
import Tooltip from '@ryangjchandler/alpine-tooltip';

window.Alpine = Alpine;
Alpine.plugin(Clipboard);
Alpine.plugin(Tooltip);
Alpine.start();
