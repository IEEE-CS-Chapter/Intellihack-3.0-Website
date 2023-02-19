import { RawTeamFormData, RawTeamFormDataKey } from "@/types";

export function validateCreateTeamBody(data: RawTeamFormData) {
    const errors : string[] = []
    if(!data.universityOrInstitute || data.universityOrInstitute.trim() === "") {
        errors.push("A university or institute name must be entered.")
    }

    if(!data.teamName || data.teamName.trim() === "") {
        errors.push("A team name must be provided.")
    }    
    
    if(!data.projectOverview || data.projectOverview.trim() === "") {
        errors.push("A project overview must be selected.")
    }    
    
    if(!data.teamLeader.NIC || data.teamLeader.NIC.trim() === "") {
        errors.push("NIC for a team leader must be entered.")
    }    
    
    if(!data.teamLeader.contactNo || data.teamLeader.contactNo.trim() === "") {
        errors.push("Contact number for a team leader must be entered.")
    }    
    
    if(!data.teamLeader.name || data.teamLeader.name.trim() === "") {
        errors.push("Team leader's name must be entered.")
        
    }    
    
    if(!data.teamLeader.tshirtSize || data.teamLeader.tshirtSize.trim() === "") {
        errors.push("A t-shirt size for the team leader must be selected.")
    }    
    
    if(!data.members[1].NIC || data.members[1].NIC.trim() === "") {
        errors.push("Team member 1's NIC must be entered.")
    }    
    
    if(!data.members[1].contactNo || data.members[1].contactNo.trim() === "") {
        errors.push("Team member 1's contact number must be entered.")
    }    
    
    if(!data.members[1].name || data.members[1].name.trim() === "") {
        errors.push("Team member 1's name must be entered.")
    }    
    
    if(!data.members[1].tshirtSize || data.members[1].tshirtSize.trim() === "") {
        errors.push("A t-shirt size for team member 1 must be selected.")
    }    


    if(data.members[2] && data.members[2].name.trim().length !== 0) {
        if(!data.members[2].NIC || data.members[2].NIC.trim() === "") {
            errors.push("Team member 3's NIC must be entered.")
        }    
        
        if(!data.members[2].contactNo || data.members[2].contactNo.trim() === "") {
            errors.push("A university comatatct must be selected.")
        }    
        
        if(!data.members[2].name || data.members[2].name.trim() === "") {
            errors.push("A university or institute name must be selected.")
        }    
        
        if(!data.members[2].tshirtSize || data.members[2].tshirtSize.trim() === "") {
            errors.push("A university or institute name must be selected.")
        }
    }

    if(data.members[3] && data.members[3].name.trim().length !== 0) {
        if(!data.members[3].NIC || data.members[3].NIC.trim() === "") {
            errors.push("Team member 3's NIC must be entered.")
        }    
        
        if(!data.members[3].contactNo || data.members[3].contactNo.trim() === "") {
            errors.push("A university comatatct must be selected.")
        }    
        
        if(!data.members[3].name || data.members[3].name.trim() === "") {
            errors.push("A university or institute name must be selected.")
        }    
        
        if(!data.members[3].tshirtSize || data.members[3].tshirtSize.trim() === "") {
            errors.push("A university or institute name must be selected.")
        }
    }


    if(!data.proposal) {
        errors.push("A proposal must be uploaded.") 
    }

    return errors
}