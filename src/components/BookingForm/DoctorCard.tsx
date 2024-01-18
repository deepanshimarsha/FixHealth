interface DoctorDetailsType {
    name: string
    expertise: string
    city: string
    _id: string
}

interface DoctorCardProps {
    doctorDetails: DoctorDetailsType
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctorDetails }) => {
    return (
        <div className="detail-pill" key={doctorDetails._id}>
            <div className="left">
                <div className="info">{doctorDetails.name}</div>
            </div>
            <div className="right">
                <div className="info">{doctorDetails.expertise}</div>
            </div>
        </div>
    )
}

export default DoctorCard
