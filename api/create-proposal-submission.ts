import type { AddPrefixToKeys } from "firebase/firestore";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { uploadProposal } from "./upload-proposal";
import { teamCollection } from "~/plugins/firebase.client";
import { RawTeam, Team } from "~/types";

type UpdateInterface<T> = T & AddPrefixToKeys<string, Record<string, unknown>>;

/**
 *  Create a new team in the firestore database
 * @param proposalData Data to create a new team
 */
export async function createTeam(proposalData: RawTeam) {
  const {
    members,
    projectOverview,
    proposal,
    teamLeader,
    teamName,
    universityOrInstitute,
  } = proposalData;
  try {
    const teamDocRef = await addDoc(teamCollection, {
      members,
      projectOverview,
      teamLeader,
      teamName,
      universityOrInstitute,
      proposal: "",
    });
    const url = await uploadProposal(teamDocRef.id, proposal);
    await updateDoc(teamDocRef, {
      proposal: url,
    } as UpdateInterface<Partial<Team>>);
  } catch (err) {
   throw new Error((err as Error).message); 
  }
}
