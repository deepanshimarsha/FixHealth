import React from 'react'
import { TestimonialProp } from './Testimonials'

const TestimonialCard: React.FC<TestimonialProp> = ({ isDarkMode }) => {
    return (
        <div className="testimonial-card">
            <figure className="snip1192">
                <blockquote>
                    I can't thank the team at FixHealth enough for the
                    exceptional care and expertise they provided during my
                    rehabilitation. The personalized treatment plan, coupled
                    with the knowledgeable and friendly staff, made my journey
                    to recovery a positive and empowering experience. I highly
                    recommend FixHealth to anyone seeking top-notch
                    physiotherapy services.{' '}
                </blockquote>
                <div className="author">
                    <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg"
                        alt="sq-sample1"
                    />
                    <h5 style={{ color: isDarkMode ? 'white' : '' }}>
                        Pelican Steve <span> Software Engineer</span>
                    </h5>
                </div>
            </figure>
            <figure className="snip1192 hover">
                <blockquote>
                    Choosing FixHealth was the best decision I made for my
                    recovery. The therapists are not only highly skilled but
                    also compassionate and dedicated to their patients'
                    well-being. The state-of-the-art facilities and tailored
                    treatment plans truly set this clinic apart. I am grateful
                    for the positive impact they've had on my health and overall
                    quality of life.{' '}
                </blockquote>
                <div className="author">
                    <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample24.jpg"
                        alt="sq-sample24"
                    />
                    <h5 style={{ color: isDarkMode ? 'white' : '' }}>
                        Max Conversion<span> Buisiness Owner</span>
                    </h5>
                </div>
            </figure>
            <figure className="snip1192">
                <blockquote>
                    From the moment I walked into FixHealth, I felt welcomed and
                    cared for. The team's professionalism and commitment to my
                    recovery were evident in every session. The therapists took
                    the time to explain each step of my treatment, ensuring I
                    felt informed and confident throughout the process. My
                    progress exceeded my expectations, and I credit FixHealth
                    for making my rehabilitation journey both successful and
                    enjoyable.{' '}
                </blockquote>
                <div className="author">
                    <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg"
                        alt="sq-sample29"
                    />
                    <h5 style={{ color: isDarkMode ? 'white' : '' }}>
                        Eleanor Faint<span> General Physician</span>
                    </h5>
                </div>
            </figure>
            <figure className="snip1192">
                <blockquote>
                    I can't express how grateful I am to the incredible team at
                    FixHealth. Their expertise, coupled with a warm and
                    encouraging atmosphere, made my physiotherapy experience
                    truly exceptional. The positive results I achieved were a
                    testament to their dedication and personalized approach. I
                    wholeheartedly recommend FixHealth to anyone seeking
                    effective and caring rehabilitation services.{' '}
                </blockquote>
                <div className="author">
                    <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg"
                        alt="sq-sample1"
                    />
                    <h5 style={{ color: isDarkMode ? 'white' : '' }}>
                        Pelican Steve <span> Hr Professional</span>
                    </h5>
                </div>
            </figure>
        </div>
    )
}

export default TestimonialCard
