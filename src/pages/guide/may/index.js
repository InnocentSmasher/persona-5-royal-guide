import React from "react";
import {Link} from "gatsby";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

export default function IndexPage() {
    return (
        <Layout>
            <SEO title={"May"}/>
            <main>
                <div>
                    <h2>May</h2>
                </div>
                <div className="day">
                    <h3>Sun 5/1</h3>
                    <h4>Daytime</h4>
                    <ul>
                        <li>Aojiru <strong>(Y5000)</strong> <strong>(Proficiency +2)</strong></li>
                        <li>Buy Bio Nutrients x3 <strong>(Y3600)</strong> from Shibuya flower shop</li>
                        <li>Work at convenience store <strong>(Charm +3)</strong></li>
                    </ul>
                    <h4>Evening</h4>
                    <ul>
                        <li>Bathhouse <strong>(Charm +5)</strong></li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Mon 5/2</h3>
                    <h4>Evening</h4>
                    <ul>
                        <li>Crossword: "Golden" <strong>(Knowledge +2)</strong></li>
                        <li>Save for crafting reload</li>
                        <li>Reload crafting for <strong>(Proficiency +5)</strong> <strong>(Proficiency Lv. 2)</strong>
                        </li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Tue 5/3</h3>
                    <h4>Evening</h4>
                    <ul>
                        <li>Cannot leave Leblanc</li>
                        <li>Study at Leblanc <strong>(Knowledge +3)</strong></li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Wed 5/4</h3>
                    <h4>Evening</h4>
                    <ul>
                        <li>Cannot leave Leblanc</li>
                        <li>Study at Leblanc <strong>(Knowledge +3)</strong></li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Thu 5/5</h3>
                    <h4>Evening</h4>
                    <ul>
                        <li>Cannot leave Leblanc</li>
                        <li>Feed plant Bio Nutrients <strong>(Kindness +3)</strong> <strong>(Kindness Lv. 2)</strong>
                        </li>
                        <li>Save for chalk dodge reload</li>
                        <li>Interact with Leblanc bathroom, Clean Leblanc with matching arcana <strong>(Kindness
                            +2)</strong> <strong>(Hierophant +1)</strong></li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Fri 5/6</h3>
                    <h4>Class</h4>
                    <ul>
                        <li>Lecture <strong>(Knowledge +2)</strong></li>
                        <li>Reload chalk dodge for <strong>(Charm +3)</strong></li>
                        <li>Moon Rank 1 <strong>(Auto)</strong></li>
                    </ul>
                    <h4>Daytime</h4>
                    <ul>
                        <li>Talk to Ann in 2D classroom, Lovers Rank 2 <strong>(Requires Kindness Lv. 2)</strong>
                            <ol>
                                <li>Choice 2: "She's so strong." (+3)</li>
                                <li>Choice 2: "You might be right." (+3)</li>
                                <li>Choice 2: "I couldn't just ignore you." (+3)</li>
                                <li>Choice 2: "Let's find it together." (+3)</li>
                                <li>(Phone) Choice 2: "Leave it to me." (+2)</li>
                            </ol>
                        </li>
                    </ul>
                    <h4>Evening</h4>
                    <ul>
                        <li>Sign up for Ore no Beko beef bowl job from part-time listings in Shibuya underground
                            walkway
                        </li>
                        <li>Work at beef bowl on Shibuya central street <strong>(Proficiency +3)</strong></li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Sat 5/7</h3>
                    <h4>Class</h4>
                    <ul>
                        <li>Question: "Fatal woman." <strong>(Knowledge +2)</strong></li>
                    </ul>
                    <h4>Evening</h4>
                    <ul>
                        <li>Cannot leave Leblanc</li>
                        <li>Save for crafting reload</li>
                        <li><strong>[Normal Route]</strong> Clean Leblanc with matching arcana <strong>(Kindness
                            +2)</strong> <strong>(Hierophant +1)</strong></li>
                        <li><strong>[Battle Route]</strong> Reload crafting for <strong>(Proficiency +5)</strong></li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Sun 5/8</h3>
                    <h4>Class</h4>
                    <ul>
                        <li>Moon Rank 2 <strong>(Auto)</strong></li>
                    </ul>
                    <h4>Evening</h4>
                    <ul>
                        <li>Aojiru <strong>(Y5000)</strong> <strong>(Guts +2)</strong></li>
                        <li>Work at beef bowl <strong>(Proficiency +5)</strong>
                            <ol>
                                <li>Correctly memorize all orders</li>
                            </ol>
                        </li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Mon 5/9</h3>
                    <h4>Daytime</h4>
                    <ul>
                        <li>Request "The Bark and Bite of a Bully" unlocked</li>
                        <li>Chariot Rank 5 <strong>(Unlocks Shibuya Gym)</strong>
                            <ol>
                                <li>Choice 2: "Protein powder?" (+3)</li>
                                <li>Choice 1: "You seem conflicted." (+2)</li>
                                <li>Choice 2: "So he's an asshole?" (+3)</li>
                                <li>(Phone) Choice 1: "Don't worry. I gotcha." (+2)</li>
                            </ol>
                        </li>
                    </ul>
                    <h4>Evening</h4>
                    <ul>
                        <li>Talk to Yoshida outside Shibuya station, Sun Rank 0.1</li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Tue 5/10</h3>
                    <h4>Class</h4>
                    <ul>
                        <li>Question: "The Heian Period." <strong>(Knowledge +2)</strong> <strong>(Knowledge Lv.
                            2)</strong></li>
                    </ul>
                    <h4>Daytime</h4>
                    <ul>
                        <li>Chariot Rank 6
                            <ol>
                                <li>Choice 3: "We can train at my place." (+3)</li>
                                <li>Choice 1: "You guys should trust Nakaoka." (+3)</li>
                                <li>Choice 1: "Absolutely." (+3)</li>
                                <li>-</li>
                                <li>-</li>
                                <li>(Phone) Choice 3: "So he should've punched back?" (+2)</li>
                            </ol>
                        </li>
                    </ul>
                    <h4>Evening</h4>
                    <ul>
                        <li>Crossword: "Malaise" <strong>(Knowledge +2)</strong></li>
                        <li>Sun Rank 1</li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Wed 5/11</h3>
                    <h4>All Day</h4>
                    <ul>
                        <li>Exams: "Minamoto no Yoshitsune.", "Minamoto no Yoritomo.", "Yoritomo won.", and "The
                            weak."
                        </li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Thu 5/12</h3>
                    <h4>All Day</h4>
                    <ul>
                        <li>Exams: "Cognition." and "Both."</li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Fri 5/13</h3>
                    <h4>All Day</h4>
                    <ul>
                        <li>Exams: "The Devil's Dictionary." and "Femme Fatale."</li>
                    </ul>
                    <h4>Class</h4>
                    <ul>
                        <li>Councillor Rank 1 <strong>(Auto)</strong></li>
                        <li>Councillor Rank 2 <strong>(Auto)</strong> <strong>(Do not need matching arcana, expect 1
                            less note)</strong>
                            <ol>
                                <li>Choice 2: "We made a deal." (+2)</li>
                                <li>-</li>
                                <li>Choice 1: "But it sounds right." (+3)</li>
                                <li>-</li>
                                <li>Choice 1: "Well, okay." (+2)</li>
                            </ol>
                        </li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Sat 5/14</h3>
                    <h4>Evening</h4>
                    <ul>
                        <li>Cannot leave Leblanc</li>
                        <li>Brew coffee with matching arcana <strong>(Charm +2)</strong> <strong>(Hierophant
                            +1)</strong></li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Sun 5/15</h3>
                    <h4>Evening</h4>
                    <ul>
                        <li>Cannot leave Leblanc</li>
                        <li>Brew coffee with matching arcana <strong>(Charm +2)</strong> <strong>(Hierophant
                            +1)</strong></li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Mon 5/16</h3>
                    <h4>Class</h4>
                    <ul>
                        <li>Question: "The placebo effect." <strong>(Knowledge +2)</strong></li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Tue 5/17</h3>
                    <h4>Evening</h4>
                    <ul>
                        <li>Cannot leave Leblanc</li>
                        <li>Brew coffee with matching arcana <strong>(Charm +2)</strong> <strong>(Hierophant
                            +1)</strong></li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Wed 5/18</h3>
                    <h4>Daytime</h4>
                    <ul>
                        <li>Buy DVD Player <strong>(Y2500)</strong> from Yongen-Jaya recycling shop</li>
                        <li>Buy rental membership <strong>(Y4800)</strong> from DVD store on Shibuya central street</li>
                        <li>Borrow "X-Folders" from DVD store</li>
                        <li>Talk to Justine in Velvet Room, Strength Rank 1</li>
                        <li><strong>Strength confidant can be continued anytime before 12/24</strong></li>
                        <li><strong>Reach barrier in Museum Palace</strong></li>
                        <li><strong>Need free slot in stock to unlock "The Purpose of a Thief" when recruiting Regent
                            during scripted encounter</strong></li>
                        <li><strong>Need to obtain Councillor persona</strong></li>
                    </ul>
                    <h4>Evening</h4>
                    <ul>
                        <li>Crossword: "Gallery" <strong>(Knowledge +2)</strong></li>
                        <li>Interact with TV in your room, Watch "X-Folders" <strong>(Guts +3)</strong></li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Thu 5/19</h3>
                    <h4>All Day</h4>
                    <ul>
                        <li>Rain</li>
                    </ul>
                    <h4>Class</h4>
                    <ul>
                        <li>Question: "Hokusai Katsushika." <strong>(Knowledge +2)</strong></li>
                    </ul>
                    <h4>Daytime</h4>
                    <ul>
                        <li><strong>Unlock barrier in Museum Palace</strong></li>
                    </ul>
                    <h4>Evening</h4>
                    <ul>
                        <li>Interact with downstairs TV in Leblanc, TV Quiz: "Using noise to cause distress." <strong>(Knowledge
                            +2)</strong></li>
                        <li>Study at Leblanc <strong>(Knowledge +5)</strong></li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Fri 5/20</h3>
                    <h4>Class</h4>
                    <ul>
                        <li>Exam results <strong>(Charm +3)</strong></li>
                    </ul>
                    <h4>Daytime</h4>
                    <ul>
                        <li>Councillor Rank 3
                            <ol>
                                <li>Choice 1: "So they have, huh?" (+2)</li>
                                <li>Choice 1: "Of course." (+2)</li>
                                <li>-</li>
                                <li>Choice 3: "It's a seed for new love." (+2)</li>
                                <li>Choice 1: "Did that help?" (+2)</li>
                                <li>(Phone) Choice 1: "Good work over there." (+2)</li>
                            </ol>
                        </li>
                    </ul>
                    <h4>Evening</h4>
                    <ul>
                        <li>Chariot Rank 7 <strong>(Unlocks Tsukishima)</strong>
                            <ol>
                                <li>Choice 2: "Let's talk to Takeishi." (+3)</li>
                                <li>Choice 1: "I think it's cool, Ryuji." (+3)</li>
                                <li>(Phone) Choice 1: "Never know until you try." (+2)</li>
                            </ol>
                        </li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Sat 5/21</h3>
                    <h4>Train</h4>
                    <ul>
                        <li>Finish reading "The Alluring Dancer" <strong>(Charm +5)</strong></li>
                    </ul>
                    <h4>Class</h4>
                    <ul>
                        <li>Question: "1:1.414" <strong>(Knowledge +2)</strong></li>
                    </ul>
                    <h4>Daytime</h4>
                    <ul>
                        <li>Borrow "The Gallant Rogue" from library</li>
                        <li><strong>Reach treasure in Museum Palace</strong></li>
                        <li><strong>Can earn money to buy Invigorate 3 Rings for Y50,000 from Death Rnk 7</strong></li>
                        <li><strong>Need to obtain Temperance persona</strong></li>
                        <li><strong>Need at least Y120,000</strong></li>
                    </ul>
                    <h4>Evening</h4>
                    <ul>
                        <li>Feed plant Bio Nutrients <strong>(Kindness +3)</strong></li>
                        <li>Finish watching "X-Folders" <strong>(Guts +3)</strong></li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Sun 5/22</h3>
                    <h4>Daytime</h4>
                    <ul>
                        <li>Aojiru <strong>(Y5000)</strong> <strong>(Kindness +2)</strong></li>
                        <li>Death Rank 4 <strong>(Guts +2)</strong>
                            <ol>
                                <li>Choice 2: "Dr. Takemi will help." (+2)</li>
                                <li>Choice 1: "You seem happy." (+3)</li>
                                <li>(Phone) Choice 1: "I'll reflect on my mistakes." (+2)</li>
                            </ol>
                        </li>
                    </ul>
                    <h4>Evening</h4>
                    <ul>
                        <li>Sun Rank 2 <strong>(Charm +3)</strong></li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Mon 5/23</h3>
                    <h4>Class</h4>
                    <ul>
                        <li>Question: "Together.", "Senses.", and "Senses coming together." <strong>(Knowledge
                            +2)</strong></li>
                    </ul>
                    <h4>Daytime</h4>
                    <ul>
                        <li>Buy "Vague" and "Buchiko's Story" from Shibuya bookstore</li>
                        <li>Send calling card</li>
                    </ul>
                    <h4>Evening</h4>
                    <ul>
                        <li>Read "The Gallant Rogue"</li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Tue 5/24</h3>
                    <h4>Train</h4>
                    <ul>
                        <li>Finish reading "The Gallant Rogue" <strong>(Guts +5)</strong></li>
                    </ul>
                    <h4>Daytime</h4>
                    <ul>
                        <li><strong>Clear Museum Palace</strong></li>
                    </ul>
                    <h4>Evening</h4>
                    <ul>
                        <li><strong>[Normal Route]</strong> Finish reading "Vague" <strong>(Harajuku unlocked)</strong>
                        </li>
                        <li><strong>[Battle Route]</strong> Clean Leblanc with matching arcana <strong>(Kindness
                            +2)</strong> <strong>(Hierophant +1)</strong></li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Wed 5/25</h3>
                    <h4>Daytime</h4>
                    <ul>
                        <li>Request "If Cats Disappeared from the City" flag</li>
                        <li>Investigate Yongen-Jaya by talking with residents to ID target <strong>(Request "If Cats
                            Disappeared from the City" unlocked)</strong></li>
                        <li>Death Rank 5 <strong>(Guts +2)</strong>
                            <ol>
                                <li>-</li>
                                <li>-</li>
                                <li>Choice 1: "That's good." (+3)</li>
                                <li>(Phone) Choice 1: "About Miwa-chan?" (+2)</li>
                            </ol>
                        </li>
                    </ul>
                    <h4>Evening</h4>
                    <ul>
                        <li>Visit Big Bang Burger on Shibuya central street, Big Bang Challenge <strong>(Charm +2,
                            Proficiency +2, Guts +2, Knowledge +2)</strong> <strong>(Charm Lv. 3)</strong></li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Thu 5/26</h3>
                    <h4>Class</h4>
                    <ul>
                        <li>Question: "Arthur Conan Doyle." <strong>(Knowledge +2)</strong></li>
                    </ul>
                    <h4>Daytime</h4>
                    <ul>
                        <li>Lovers Rank 3 <strong>(Inokashira unlocked)</strong>
                            <ol>
                                <li>-</li>
                                <li>-</li>
                                <li>-</li>
                                <li>-</li>
                                <li>Choice 3: "Can we stop yet?" (+3)</li>
                                <li>-</li>
                                <li>-</li>
                                <li>Choice 2: "Has that happened to you?" (+3)</li>
                                <li>Choice 2: "That freedom sounds nice." (+2)</li>
                                <li>(Phone) Choice 1: "Could be." (+2)</li>
                            </ol>
                        </li>
                    </ul>
                    <h4>Evening</h4>
                    <ul>
                        <li>TV Quiz: "Queen of evidence." <strong>(Knowledge +2)</strong></li>
                        <li>Crossword: "Pollenosis" <strong>(Knowledge +2)</strong></li>
                        <li>Talk to Mishima on Shibuya central street to start Operation Maidwatch, Temperance Rank 0.1
                            <ol>
                                <li>Choice 3: "You're a genius, Ryuji!" (Chariot +3)</li>
                            </ol>
                        </li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Fri 5/27</h3>
                    <h4>Daytime</h4>
                    <ul>
                        <li>Talk to Kawakami in Shujin hallways and help her out</li>
                        <li>Visit diner on Shibuya central street, Order Surprise Sando at diner <strong>(Knowledge +2,
                            Guts +2)</strong> <strong>(Guts Lv. 3)</strong></li>
                    </ul>
                    <h4>Evening</h4>
                    <ul>
                        <li>Interact with payphone in Leblanc, Temperance Rank 1 <strong>(Y5000)</strong> <strong>(Requires
                            Guts Lv. 3)</strong></li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Sat 5/28</h3>
                    <h4>Daytime</h4>
                    <ul>
                        <li>Lovers Rank 4
                            <ol>
                                <li>Choice 1: "I know what you mean." (+3)</li>
                                <li>Choice 2: "That's hilarious." (+3)</li>
                                <li>Choice 1: "Tell me." (+3)</li>
                                <li>Choice 1: "Good idea." (+3)</li>
                                <li>Choice 3: "Good luck with that." (+3)</li>
                                <li>(Phone) Choice 1: "I train everyday." (+2)</li>
                            </ol>
                        </li>
                    </ul>
                    <h4>Evening</h4>
                    <ul>
                        <li>Temperance Rank 2 <strong>(Y5000)</strong>
                            <ol>
                                <li>Choice 1: "It does." (+2)</li>
                                <li>Choice 2: "Absolutely not!" (+2)</li>
                                <li>-</li>
                                <li>-</li>
                                <li>(Phone) Choice 2: "Uh, what the hell?" (+2)</li>
                            </ol>
                        </li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Sun 5/29</h3>
                    <h4>Daytime</h4>
                    <ul>
                        <li>Aojiru <strong>(Y5000)</strong> <strong>(Knowledge +2)</strong></li>
                        <li>Lovers Rank 5
                            <ol>
                                <li>Choice 2: "Give it up." (+2)</li>
                                <li>Choice 2: "She's amazing, huh…" (+2)</li>
                                <li>Choice 1: "It had grace." (+2)</li>
                                <li>-</li>
                                <li>-</li>
                            </ol>
                        </li>
                    </ul>
                    <h4>Evening</h4>
                    <ul>
                        <li>Sun Rank 3</li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Mon 5/30</h3>
                    <h4>Class</h4>
                    <ul>
                        <li>Faith Rank 1 <strong>(Auto)</strong></li>
                    </ul>
                    <h4>Evening</h4>
                    <ul>
                        <li>Watch movies in Shibuya <strong>(Kindness +5)</strong></li>
                    </ul>
                </div>
                <div className="day">
                    <h3>Tue 5/31</h3>
                    <h4>Class</h4>
                    <ul>
                        <li>Question: "John Silver." <strong>(Knowledge +2)</strong></li>
                    </ul>
                    <h4>Daytime</h4>
                    <ul>
                        <li>Lovers Hangout Inokashira
                            <ol>
                                <li>Choice 3: "Let's just enjoy the air." (+3)</li>
                            </ol>
                        </li>
                    </ul>
                    <h4>Evening</h4>
                    <ul>
                        <li>Crossword: "Japanese" <strong>(Knowledge +2)</strong></li>
                        <li>Order Surprise Sando at diner <strong>(Knowledge +2, Guts +2)</strong></li>
                    </ul>
                </div>
                <div>
                    <Link to="../june">Go to June</Link>
                </div>
            </main>
        </Layout>
    );
}
