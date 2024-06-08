import Section from "@/components/cm_ui/common/Section"
import { Button } from "@/components/ui/button"

function ImportantInfo() {
    return (
        <Section title="Important Info" id="info">
            <div className="space-x-4 space-y-2 text-center xl:text-start">
            <Button className='bg-accent-lightCyan text-white hover:bg-accent-lightCyan'>Mobile eTickets</Button>
            <Button className='bg-accent-lightCyan text-white hover:bg-accent-lightCyan'>No Refunds</Button>
            <Button className='bg-accent-lightCyan text-white hover:bg-accent-lightCyan'>ID Identification Required</Button>
            </div>
        </Section>
    )
}

export default ImportantInfo