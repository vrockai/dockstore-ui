/*
 *    Copyright 2016 OICR
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

'use strict';

/**
 * @ngdoc service
 * @name dockstore.ui.DocumentationService
 * @description
 * # DocumentationService
 * Service in the dockstore.ui.
 */
angular.module('dockstore.ui')
  .service('DocumentationService', [
    function () {

      this.docObjs = [
        {
          slug: 'getting-started',
          description: 'This tutorial walks through how to create your tool development environment',
          name: 'Getting Started',
          path: 'docs/getting-started.md'
        },
        {
          slug: 'getting-started-with-docker',
          description: 'This tutorial walks through how to create a Docker image',
          name: 'Getting Started with Docker',
          path: 'docs/getting-started-with-docker.md'
        },
        {
          slug: 'getting-started-with-cwl',
          description: 'This tutorial walks through how to describe a Docker image with CWL',
          name: 'Getting Started with CWL',
          path: 'docs/getting-started-with-cwl.md'
        },
        {
          slug: 'getting-started-with-dockstore',
          description: 'This tutorial walks through how to register at Dockstore and then share simple tools',
          name: 'Getting Started with Dockstore',
          path: 'docs/getting-started-with-dockstore.md'
        },
        {
          slug: 'docker_registries',
          description: 'This page talks about the various Docker registries supported by Dockstore, and the best practices for using these registries.',
          name: 'Docker Registries',
          path: 'docs/docker_registries.md'
        },
        {
          slug: 'public_private_tools',
          description: 'This page talks about the difference between public and private Dockstore tools.',
          name: 'Public and Private Tools',
          path: 'docs/public_private_tools.md'
        },
        {
          slug: 'about',
          description: 'This document gives background on Dockstore and what we are trying to accomplish',
          name: 'About Dockstore',
          path: 'docs/about.md'
        },
        {
          slug: 'workflows',
          description: 'This tutorial walks through how to register and share more complex workflows',
          name: 'Workflows',
          path: 'docs/workflows.md'
        },
        {
          slug: 'launch',
          description: 'This tutorial walks through how to launch tools and workflows hosted at Dockstore',
          name: 'Launching Tools and Workflows',
          path: 'docs/launch.md'
        },
        {
          slug: 'blog',
          description: 'Dockstore news and events',
          name: 'News and Events',
          path: 'docs/blog.md'
        },
        {
          slug: 'advanced-features',
          description: 'This page introduces advanced features of Dockstore that may make using or developing Dockstore tools more convenient',
          name: 'Advanced Features',
          path: 'docs/advanced-features.md'
        },
        {
          slug: 'faq',
          description: 'This page gathers tools and tips on using Dockstore along with tips on creating tools with Docker and CWL 1.0',
          name: 'FAQ',
          path: 'docs/faq.md'
        }
      ];

      this.getDocumentObjs = function() {
        return this.docObjs;
      };

  }]);
