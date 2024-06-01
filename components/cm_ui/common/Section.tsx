
function Section({ children, title, containerStyle, subContainerStyle }: { children: React.ReactNode, title:string, containerStyle?:string, subContainerStyle?:string }) {
    return (
        <section className={`container ${containerStyle}`}>
            <div className={`container py-[36px] bg-[#d3e4e3] rounded-[36px] ${subContainerStyle}`}>
                <h1 className="text-[24px] font-semibold text-accent-orange">{title}</h1>
                <div className="bg-accent-lightOrange w-16 rounded-full h-1"></div>
                <div className="py-10">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Section