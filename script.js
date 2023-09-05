const ABT = 'AIChat Solutions is a UK-based agency with a team of 8 experts specializing in AI-powered services. We offer AI ChatBot, AI Automation, and AI Persona Bot solutions. Our AI services revolutionize businesses, enhancing customer interactions, streamlining workflows, and delivering personalized engagement. We are proud of our cost-effectiveness, with an average 78% cost reduction. Join us to embrace the AI-powered future.'
const CNT = 'xx'
const SRV = 'The services offered include personal bots, AI chatbots, AI automation, privacy management, long-term memory bots, data pipelines for speed and cost-efficiency, backend data automation for lead capture and business analysis. Chatbots are available for various niches, including real estate, mortgage brokerage firms, Airbnb, electricians, and there are ongoing developments for a bot designed for people with disabilities, a digital agency lead generation bot, and mentor persona bots with voice multi-language and chat features.'

function expand(itself){
    let txt = itself.classList[0];
    const expandedDiv = document.getElementById("expand");

    expandedDiv.classList.remove("invisible");
    expandedDiv.classList.add("visible");

    document.getElementById("change").innerText = eval(txt);

}

function closeD(){
    let close = document.getElementById("expand");
    close.classList.remove("visible");
    close.classList.add("invisible");
}

function darkMode(){
    const change = document.getElementById('darkmode');
    let dmode = change.checked;
    
    if (dmode == true) {
        document.getElementById('customer').style.backgroundColor = "#223555";
        document.documentElement.style.backgroundColor = '#212121';
        document.documentElement.style.color = 'white';
        document.getElementById('feature').style.backgroundColor = "#223555";
        document.getElementById('header').style.backgroundColor = "#223555";
        document.getElementById('expand').style.backgroundColor = "#223555";
        document.getElementById('header').style.boxShadow = "0 0 10px 0px black";
        document.getElementById('main').style.boxShadow = "0 0 10px 0px black";
    }

    if (dmode == false) {
        document.getElementById('customer').style.backgroundColor = 'initial';
        document.documentElement.style.backgroundColor = 'initial';
        document.documentElement.style.color = 'initial';
        document.getElementById('feature').style.backgroundColor = 'initial';
        document.getElementById('header').style.backgroundColor = 'white';
        document.getElementById('expand').style.backgroundColor = "initial"
    }
}