export interface FormResponseAnswerRecord {
	Form_Response_Answer_ID: number;
	Form_Field_ID: number;
	Response: string | null;
	Form_Response_ID: number;
	Event_Participant_ID: number | null;
	Pledge_ID: null;
	Opportunity_Response: null;
	Placed: boolean;
}



export interface FormResponseAnswer {
	formResponseAnswerID: number;
	formFieldID: number;
	formResponseID: number;
	response: string | null;
	eventParticipantID: number | null;
	pledgeID: null;
	opportunityResponse: null;
	placed: boolean;
}