interface IMail{
    to: string,
    message:{
        subject: string,
        html: string,
    }
}

export default IMail;