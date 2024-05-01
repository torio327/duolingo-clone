import {
    BooleanInput,
    Create,
    NumberInput,
    ReferenceInput,
    required,
    SelectInput,
    SimpleForm,
    TextInput
} from "react-admin";


export const ChallengeOptionCreate=()=>{
    return(
        <Create>
            <SimpleForm>
                <TextInput source={"question"} validate={[required()]} label={"Question"}/>
                <BooleanInput source={"correct"} label={"Correct option"}/>
                <ReferenceInput source={"challengeId"} reference={"challenges"}/>
                <TextInput source={"imageSrc"} validate={[required()]} label={"Image URL"}/>
                <TextInput source={"audioSrc"} validate={[required()]} label={"AudioURL"}/>
            </SimpleForm>
        </Create>
    )
}