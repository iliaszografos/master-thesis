var config = {
    style: 'mapbox://styles/sgmapbox/ck8etv6jr25781jqhhq8clbzc',
    accessToken: 'pk.eyJ1Ijoic2dtYXBib3giLCJhIjoiY2s5NHViY251MDUweDNkbzVnYmJtbXYydCJ9.8Ra0D8yuCz7g6UMyWaMNpA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Η εξάπλωση της COVID-19 στην Ελλάδα',
    subtitle: 'Μια scrollytelling αφήγηση σε 6 πόλεις της χώρας',
    byline: 'By Ilias Zografos',
    footer: '',
    chapters: [
        {
            id: 'athens',
            alignment: 'left',
            hidden: false,
            title: 'Αθήνα',
            image: 'https://www.google.com/search?q=athens&sxsrf=AOaemvLAz3QSm6gSp-4czJOYtWpUxP231g:1639955031342&source=lnms&tbm=isch&sa=X&ved=2ahUKEwissdzI_PD0AhVTRPEDHeudB_YQ_AUoAnoECAMQBA&biw=1440&bih=703&dpr=2#imgrc=rgc5kWmtgEt_cM',
            description: 'Τα κρούσματα COVID-19 στην Αθήνα',
            location: {
                center: { lon: 23.72753, lat: 37.98381 },
                zoom: 14.18,
                pitch: 59.5,
                bearing: -1.19,
        },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'natmall-path',
                opacity: 0.9,
              },
            ],
            onChapterExit: [
              {
                layer: 'natmall-path',
                opacity: 0,
              },
            ]
        },
        {
            id: 'thessaloniki',
            alignment: 'right',
            hidden: false,
            title: 'Θεσσαλονίκη',
            image: 'https://www.google.com/search?q=%CE%B8%CE%B5%CF%83%CF%83%CE%B1%CE%BB%CE%BF%CE%BD%CE%B9%CE%BA%CE%B7&sxsrf=AOaemvKUVo8GpNUmwWauuZZyyd6fHhWWsw:1639955345918&source=lnms&tbm=isch&sa=X&sqi=2&ved=2ahUKEwiP1tze_fD0AhWhB2MBHes3D64Q_AUoAnoECAIQBA&biw=1440&bih=703&dpr=2#imgrc=KG6mLgxEz1tMXM',
            description: 'Τα κρούσματα COVID-19 στη Θεσσαλονίκη.',
            location: {
                center: { lon: 22.94741, lat: 40.62926 },
                zoom: 14.68,
                pitch: 0.0,
                bearing: 0.0,
            },
            onChapterEnter: [
                {
                    layer: 'natmall-visitors-circles',
                    opacity: 1,
                },
                {
                    layer: 'natmall-visitors-labels',
                    opacity: 1,
                },
            ],
            onChapterExit: [
                {
                    layer: 'natmall-visitors-circles',
                    opacity: 0,
                },
                {
                    layer: 'natmall-visitors-labels',
                    opacity: 0,
                },
            ],
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'patra',
            alignment: 'left',
            hidden: false,
            title: 'Πάτρα',
            image: 'https://www.google.com/search?q=%CF%80%CE%B1%CF%84%CF%81%CE%B1&sxsrf=AOaemvLNA8JvJJuv0YuZ8ooslYRFQP9FNQ:1639955595950&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjQgfnV_vD0AhVMQ_EDHTKRAbUQ_AUoAnoECAIQBA&biw=1440&bih=703&dpr=2#imgrc=kZ3w6KhO9y0_FM',
            description: 'Τα κρούσματα COVID-19 στην Πάτρα',
            location: {
                center: { lon: 21.73457, lat: 38.24663 },
                zoom: 16.06,
                pitch: 32.5,
                bearing: -60.0,
            },
            onChapterEnter: [
                {
                    layer: 'natmall-buildings',
                    opacity: 0.8,
                },
            ],
            onChapterExit: [
                {
                    layer: 'natmall-buildings',
                    opacity: 0.3,
                },
            ],
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'larisa',
            alignment: 'right',
            hidden: false,
            title: 'Λάρισα',
            image: 'https://www.google.com/search?q=%CE%BB%CE%B1%CF%81%CE%B9%CF%83%CE%B1&tbm=isch&ved=2ahUKEwjskszX_vD0AhV_4rsIHcpTDncQ2-cCegQIABAA&oq=%CE%BB%CE%B1%CF%81%CE%B9%CF%83%CE%B1&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgAEEM6BwgjEO8DECc6CAgAEIAEELEDOgsIABCABBCxAxCDAVDWGViCIGCZIWgAcAB4AYABkAGIAbYGkgEDMC43mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=j7y_YayPGP_E7_UPyqe5uAc&bih=703&biw=1440#imgrc=_4AouwIRywIfKM',
            description: 'Τα κρούσματα COVID-19 στη Λάρισα.',
            location: {
                center: { lon: 22.41320, lat: 39.64345 },
                zoom: 16.97,
                pitch: 45.5,
                bearing: -36.8,
            },
            onChapterEnter: [
                {
                    layer: 'natmall-buildings',
                    opacity: 0.8,
                },
            ],
            onChapterExit: [
                {
                    layer: 'natmall-buildings',
                    opacity: 0.3,
                },
            ],
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'volos',
            alignment: 'left',
            hidden: false,
            title: 'Βόλος',
            image: 'https://www.google.com/search?q=%CE%B2%CE%BF%CE%BB%CE%BF%CF%82&tbm=isch&ved=2ahUKEwjY9dHs__D0AhW25LsIHdyFCa4Q2-cCegQIABAA&oq=%CE%B2%CE%BF%CE%BB%CE%BF%CF%82&gs_lcp=CgNpbWcQAzoECAAQQzoFCAAQgAQ6BwgjEO8DECc6CwgAEIAEELEDEIMBOggIABCxAxCDAToICAAQgAQQsQNQjAxY6hBgrRJoAHAAeACAAeMCiAGcCZIBBzAuNC4xLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=x72_YZj2OrbJ7_UP3Ium8Ao&bih=703&biw=1440#imgrc=eixRBb0UU63EkM',
            description: 'Τα κρούσματα COVID-19 στον Βόλο.',
            location: {
                center: { lon: 22.94271, lat: 39.37303 },
                zoom: 16.18,
                pitch: 59.5,
                bearing: -91.09,
            },
            onChapterEnter: [
                {
                    layer: 'natmall-buildings',
                    opacity: 0.8,
                },
            ],
            onChapterExit: [
                {
                    layer: 'natmall-buildings',
                    opacity: 0.3,
                },
            ],
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'irakleio',
            alignment: 'right',
            hidden: false,
            title: 'Ηράκλειο',
            image: 'https://www.google.com/search?q=%CE%B7%CF%81%CE%B1%CE%BA%CE%BB%CE%B5%CE%B9%CE%BF+%CE%BA%CF%81%CE%B7%CF%84%CE%B7%CF%83&sxsrf=AOaemvKZo9l9V37ofwgQ65QXJ7__oPTgzQ:1639956642526&source=lnms&tbm=isch&sa=X&sqi=2&ved=2ahUKEwjqoP_IgvH0AhWx8bsIHY72BA8Q_AUoAnoECAIQBA&biw=1440&bih=703&dpr=2#imgrc=tQ6ZBJNqJRKbcM',
            description: 'Τα κρούσματα της COVID-19 στο Ηράκλειο.',
            location: {
                center: { lon: 25.14825, lat: 35.34184 },
                zoom: 14.18,
                pitch: 59.5,
                bearing: -1.19,
            },
            onChapterEnter: [
                {
                    layer: 'natmall-path',
                    opacity: 0.9,
                },
            ],
            onChapterExit: [
                {
                    layer: 'natmall-path',
                    opacity: 0,
                },
            ],
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
