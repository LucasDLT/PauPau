export{}

declare global{
    interface Window{
        grecaptcha:{
            execute:(
                sitekey:string,
                options:{action:string}
            )=>Promise<string>
        }
    }
}