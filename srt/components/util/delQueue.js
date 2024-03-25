export default async function delQueue(queueID){
    const response = await fetch(`/api/queue/delete/${queueID}`)
    const data = await response.json()
    return data;
}