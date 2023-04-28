import {BASEURL} from "./service/backend.service.ts";
import {useCallback, useState} from "react";

const serverEvents = new EventSource(BASEURL + 'main-stream')
serverEvents.addEventListener('keep-alive', (sseEvent: MessageEvent) => {
    console.log(sseEvent);
})

export default function MainStreamMessage() {
    const [sseEvent, setSSEEvent] = useState<MessageEvent>();
    const onServerSentEvent = useCallback((sseEvent: MessageEvent) => {
        setSSEEvent(sseEvent);
    }, []);
    serverEvents.onmessage = onServerSentEvent;
    return (<>{sseEvent?.data}</>);
}
