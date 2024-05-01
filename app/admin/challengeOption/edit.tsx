import {
    BooleanInput,
    Create, Edit,
    NumberInput,
    ReferenceInput,
    required,
    SelectInput,
    SimpleForm,
    TextInput
} from "react-admin";


export const ChallengeOptionEdit=()=>{
    return(
        <Edit>
            <SimpleForm>
                <TextInput source={"question"} validate={[required()]} label={"Question"}/>
                <BooleanInput source={"correct"} label={"Correct option"}/>
                <ReferenceInput source={"challengeId"} reference={"challenges"}/>
                <TextInput source={"imageSrc"} validate={[required()]} label={"Image URL"}/>
                <TextInput source={"audioSrc"} validate={[required()]} label={"AudioURL"}/>
            </SimpleForm>
        </Edit>
    )
}