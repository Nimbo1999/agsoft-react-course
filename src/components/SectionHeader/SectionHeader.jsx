const SectionHeader = ({ label, count = 0, subTitle }) => (
    <div className="section-header">
        <div className="content">
            <h1>{label}</h1>

            {!!count && (
                <div className="round">
                    <span>{count}</span>
                </div>
            )}
        </div>

        <p>{subTitle}</p>
    </div>
);

export default SectionHeader;
