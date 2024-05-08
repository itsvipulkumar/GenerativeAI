import React from "react";
import Button from '@mui/material/Button';

export default function Plans() {
    return (
        <section className="plans-section">
            <div className="plans-container">
                <div className="plan-card">
                    <div className="plan-content">
                        <h3 className="plan-title">Starter</h3>
                        <p className="plan-description">Perfect for individuals and small teams.</p>
                        <div className="plan-price">
                            <span className="price">$9</span>
                            <span className="price-per">/month</span>
                        </div>
                        <Button className="plan-button" variant="contained">
                            Get Started
                        </Button>
                    </div>
                </div>
                <div className="plan-card dark-bg">
                    <div className="plan-content">
                        <h3 className="plan-title">Pro</h3>
                        <p className="plan-description">Ideal for growing teams and small businesses.</p>
                        <div className="plan-price">
                            <span className="price">$29</span>
                            <span className="price-per">/month</span>
                        </div>
                        <Button className="plan-button" variant="contained">
                            Get Started
                        </Button>
                    </div>
                </div>
                <div className="plan-card">
                    <div className="plan-content">
                        <h3 className="plan-title">Enterprise</h3>
                        <p className="plan-description">Tailored for large teams and organizations.</p>
                        <div className="plan-price">
                            <span className="price">$99</span>
                            <span className="price-per">/month</span>
                        </div>
                        <Button className="plan-button" variant="contained">
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
