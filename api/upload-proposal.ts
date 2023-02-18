import {
    getDownloadURL,
    ref as storageRef,
    uploadBytes,
  } from "firebase/storage";
  import { storage } from "~/plugins/firebase.client";
  
  /**
   * @param proposalId
   * @param proposalFile
   */
  export async function uploadProposal(proposalId: string, proposalFile: File) {
    const posterRef = storageRef(
      storage,
      `proposals/${proposalId}/${proposalFile.name}`
    );
  
    const snapshot = await uploadBytes(posterRef, proposalFile);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  }
  