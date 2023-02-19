export type TshirtSize = "XS" | "S" | "M" | "L" | "XL";
export type TshirtSizeOrNone = TshirtSize | "";

export type TshirtSizeOptions = ["XS", "S", "M", "L", "XL"];

export interface TeamMemberWithoutTshirtSize {
  name: string;
  NIC: string;
  contactNo: string;
}
export interface TeamMember extends TeamMemberWithoutTshirtSize {
  tshirtSize: TshirtSize;
}

export interface RawTeamMemberData extends TeamMemberWithoutTshirtSize {
  tshirtSize: TshirtSizeOrNone;
}

export interface TeamWithoutProposalAndTeamMembers {
  universityOrInstitute: string;
  teamName: string;
  projectOverview: string;
}

export interface TeamWithoutProposal extends TeamWithoutProposalAndTeamMembers {
  members: {
    1: TeamMember;
    2: TeamMember;
    3?: TeamMember;
  };
  teamLeader: TeamMember;
}

export interface TeamWithoutProposalRaw
  extends TeamWithoutProposalAndTeamMembers {
  members: {
    1: RawTeamMemberData;
    2: RawTeamMemberData;
    3: RawTeamMemberData;
  };
  teamLeader: RawTeamMemberData;
}

export interface Team extends TeamWithoutProposal {
  proposal: string;
}

export interface RawTeam extends TeamWithoutProposal {
  proposal: File;
}

export interface RawTeamFormData extends TeamWithoutProposalRaw {
  proposal: File | null;
}

export type RawTeamFormDataKey = keyof RawTeamFormData;
