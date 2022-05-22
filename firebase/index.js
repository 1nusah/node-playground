const { initializeApp } = require('firebase/app');
const { getStorage } = require('firebase/storage');
const { getAnalytics } = require('firebase/analytics');

const firebaseConfig = {
	apiKey: 'AIzaSyC3XRVbBJ369XWI15gzVjv5NzpcnoX1xC8',
	authDomain: 'node-tuts-1fe47.firebaseapp.com',
	projectId: 'node-tuts-1fe47',
	storageBucket: 'node-tuts-1fe47.appspot.com',
	messagingSenderId: '470344316176',
	appId: '1:470344316176:web:c3c9c01f91cd962c0fe195',
	measurementId: 'G-64VD1F16DT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

async function uploadFile(path, filename) {
	const res = storage.upload(path, {
		public: true,
		destination: `/products/${filename}`,
		metadata: {
			firebaseStorageDownloadTokens: uuidv4(),
		},
	});
	return res[0].metadata.mediaLink;
}
module.exports = { uploadFile };
