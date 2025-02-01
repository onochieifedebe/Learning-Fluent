import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '4295cbec5d89480796c816ac27066191'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: '2d2c91e7e13542e689dacc23744d89d8'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '79039d647b544de39d749885e7f1b181'
                    }
                    cs01: {
                        table: 'sys_script_client'
                        id: '36f64f97e87a47ae96cdf479aa66df91'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '66f6eaaba8c741c1ae2237cc21c36476'
                    }
                }
            }
        }
    }
}
