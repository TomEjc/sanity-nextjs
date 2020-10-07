export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7dca2885ba5314e22980a8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-studio-1g9k7s5f',
                  apiId: '45d52d62-6661-4cc1-bbd8-26ba9078e65c'
                },
                {
                  buildHookId: '5f7dca286edb2b146db3f863',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-web-p8fno33q',
                  apiId: '33f41403-330f-47f7-9ebc-d8a0b6fa2e69'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TomEjc/sanity-nextjs',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-web-p8fno33q.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
