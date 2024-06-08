"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


function TicketModal() {
    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <Button className='bg-accent-lightCyan text-white hover:bg-accent-lightCyan w-full h-[50px] fixed bottom-2  mx-auto flex justify-center '>Buy Ticket</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            <div className="container">
                                <div></div>
                                <div className="grid grid-cols-2 min-h-[100px] bg-accent-lightCyan text-secondary-cyanDarkest">
                                    <div>
                                        Music Party w/ special guests
                                    </div>
                                    <div className="bg-accent-darkCyan py-4">
                                        <ul className="space-y-2">
                                            <li className="text-xs">Use secure methods for online transactions. Avoid sharing sensitive information.</li>
                                            <li className="text-xs">
                                                Regularly check accounts through online banking. Set up alerts for large transactions or low balances.
                                            </li>
                                            <li className="text-xs">Monitor statements for unauthorized transactions. Stay informed about scams and financial best practices.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <div className="all-center1">
                                        <div>
                                            <h3 className="text-sm">Vip</h3>
                                            <h1>$80 +convenience fee + taxes</h1>
                                        </div>
                                        <div className="all-center">
                                            <Button>-</Button>
                                            <span className="text-2xl"> {"0"}</span>
                                            <Button>+</Button>
                                        </div>
                                    </div>
                                    <div className="all-center1">
                                        <div>
                                            <h3 className="text-sm">Vip</h3>
                                            <h1>$80 +convenience fee + taxes</h1>
                                        </div>
                                        <div className="all-center">
                                            <Button>-</Button>
                                            <span className="text-2xl"> {"0"}</span>
                                            <Button>+</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default TicketModal