import { useState } from 'react';

import { STATE_CHANGED, storage} from "../../../lib/firebase";

export default function ImageUploader() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState(null);
  // Creates a Firebase Upload Task
  const uploadFile = async (e) => {
    // Get the file
    const file = Array.from(e.target.files)[0];
    const extension = file.type.split('/')[1];

    // Make a reference to the storage bucket location
    const ref = storage.ref(`uploads/${Date.now()}.${extension}`);
    setUploading(true);

    // Starts the upload
    const task = ref.put(file);

    // Listen to updates to upload task
    task.on(STATE_CHANGED, (snapshot) => {
        const pct = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0);
        setProgress(pct);

    // Get the download URL after the task is finished (this is not a native promise)
    task
        .then((d) => ref.getDownloadURL())
        .then((url) => {
            setDownloadURL(url);
            setUploading(false);
        })
    });
  }
  return (
    <div className='relative py-5 md:w-full md:pr-0 '>
      <div className='w-25  absolute inset-y-0 left-0 flex items-center hover:border-primary-200  '>
          {/* <button className='ml-0 h-11 w-full cursor-pointer rounded border-2 border-b-4 border-r-4  border-black px-2 hover:border-primary-200 hover:text-primary-200 '>
              Browse
          </button> */}
      </div>
      {uploading && <h3>{progress}%</h3>}
      {!uploading && (
        <label className="btn">
                    <input type="file" onChange={uploadFile} accept="image/x-png,image/gif,image/jpeg" />
                </label>
      )}

      {downloadURL && <code className="">{downloadURL}</code>}
      
    </div>
  )
}