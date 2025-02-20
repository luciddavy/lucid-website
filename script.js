const App = () => {
    return (
        <div>
            <header>
                <h1>Lucid D. Dealerman Connection Services</h1>
                <p>Providing Electric Sales & Installation</p>
            </header>

            <nav>
                <ul>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <section id="services">
                <h2>Our Services</h2>
                <div className="service">
                    <img src="tv-repair.jpg" alt="Technician repairing a television" />
                    <h3>Television Repair & Installation</h3>
                    <p>We fix and install TVs of all sizes.</p>
                </div>
                <div className="service">
                    <img src="smart-phone-repair.jpg" alt="Smartphone screen being replaced" />
                    <h3>Smartphone Repair</h3>
                    <p>Screen replacements, battery fixes, and more.</p>
                </div>
                <div className="service">
                    <img src="television-installation.jpg" alt="TV mounted on a wall during installation" />
                    <h3>Television Installation</h3>
                    <p>Installation and maintenance of televisions.</p>
                </div>
            </section>

            <section id="pricing">
                <h2>Pricing</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>TV Repair</td>
                            <td>230,000 UGX (Depending on size and brand)</td>
                        </tr>
                        <tr>
                            <td>Smartphone Screen Replacement</td>
                            <td>80,000 UGX and Above</td>
                        </tr>
                        <tr>
                            <td>Television Installation</td>
                            <td>50,000 UGX</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section id="contact">
                <h2>Contact Us</h2>
                <p>Email: <a href="mailto:info@luciddealerman.com">info@luciddealerman.com</a></p>
                <p>Phone: +256 700 842 849</p>
            </section>

            <footer>
                <p>&copy; 2025 Lucid D. Dealerman Connection Services</p>
            </footer>
        </div>
    );
};

// React 18 Rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);