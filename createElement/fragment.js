const messages = document.querySelector("#messages");

const fragment = document.createDocumentFragment();


const msgBuilder = (...info) => {
    const msgItem = document.createElement('section');
    msgItem.className = "message";
        const spanWrapper = document.createElement('span');
        spanWrapper.className = info[0];
        spanWrapper.textContent = `${info[0]}: ${info[1]}`;
    msgItem.appendChild(spanWrapper);
    fragment.appendChild(msgItem);
}

//how to simplify stacks of createElement

for (const msg of messageList) {
    let msgConversation = "";
    msgConversation += msgBuilder(msg.speaker, msg.message);
    console.log = msgConversation;
}

messages.appendChild(fragment);