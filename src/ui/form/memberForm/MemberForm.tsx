import Input from "../Input"
import TextArea from "../TextArea"
import MemberMultiInputs from "./MemberMultiInputs"

export default function MemberForm() {
    return (
        <div>
            <form action="" className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between gap-5">
                <Input containerClassName="lg:w-[45%]" label="Name" id="name" name="name" />
                <Input containerClassName="lg:w-[45%]" label="Email" id="email" name="email" />
                <Input containerClassName="lg:w-[45%]" label="Position" id="positionId" name="positionId" />
                <MemberMultiInputs />
                <TextArea
                containerClassName="w-full"
                    rows={5}
                    label="Description"
                    name="description"
                    id="description"
                />
            </form>
        </div>
    )
}
