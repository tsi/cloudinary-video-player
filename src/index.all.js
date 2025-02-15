// This file is bundled as `cld-video-player.js` to be imported as a single module that
// includes all plugins.

// Usage:
// import { videoPlayer, videoPlayers } from 'cloudinary-video-player';
// Or:
// import cloudinary from 'cloudinary-video-player';

import cloudinary from './index.js';

export * from './index.js';
export * from './plugins/dash/videojs-dash.js';
export * from './plugins/styled-text-tracks/styled-text-tracks.js';

export default cloudinary;
