import { deepOrange, deepPurple } from '@material-ui/core/colors'

export default [
    {
        appt_time: "2020-04-01 12:15:00",
        agents: [
            {
                _id: 1,
                name: 'Carole Marvin',
                code: '05TYX',
                phone: '(805) 334 4432',
                email: 'example@mail.com',
                color: deepOrange[500]
            },
            {
                _id: 3,
                name: 'Steven Shrom',
                code: '09KTX',
                phone: '(804) 123 4567',
                email: 'mail@example.com',
                color: deepPurple[500]
            }
        ]
    }, 
    {
        appt_time: "2020-04-01 09:30:00",
        agents: [
            {
                _id: 2,
                name: 'Shawna Blankenship',
                code: '32FFR',
                phone: '(286) 934 3515',
                email: 'blankenship@example.com',
                color: deepPurple[900]
            }
        ]
    }
    
]