

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
	form_Response_Answer_ID: number;
	form_Field_ID: number;
	response: string | null;
	form_Response_ID: number;
	event_Participant_ID: number | null;
	pledge_ID: null;
	opportunity_Response: null;
	placed: boolean;
}