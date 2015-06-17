


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>miguel-perez/smoothState.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="miguel-perez/smoothState.js" name="twitter:title" /><meta content="smoothState.js - A jQuery plugin to stop the jank of page loads." name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/1682551?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/1682551?v=3&amp;s=400" property="og:image" /><meta content="miguel-perez/smoothState.js" property="og:title" /><meta content="https://github.com/miguel-perez/smoothState.js" property="og:url" /><meta content="smoothState.js - A jQuery plugin to stop the jank of page loads." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/Nzk5ODUxNTpkOGUwMjU2MmQ0M2U2ODI2YTQ0YjhkMDFhZDIzZDQ5NzphZjc3MzEwMTZlZjgyM2I5MjlkNmRjODgwY2QzNWRmNTQ3ODQzYmU3N2FhOGU4MjZjZGMxYmYxYzAxMTU2MTJh--da14c1e37892d0f2701373be4056e80f9cdf669c">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="D1D29002:10B8:81B284:5535AF8D" name="octolytics-dimension-request_id" /><meta content="7998515" name="octolytics-actor-id" /><meta content="davetheapple" name="octolytics-actor-login" /><meta content="e8061bf91266aaa7a9c11c76c79256b593fcffb0b85f6b453b476f25b515ecd9" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, files#disambiguate" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta class="js-ga-set" name="dimension2" content="Header v3">
    <meta name="is-dotcom" content="true">
    <meta name="hostname" content="github.com">
    <meta name="user-login" content="davetheapple">

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="K7Ze0MYQOWXA6H3eoXQuEpDQVGUuoOa4eGzAWJojsJTUjDO35rXhRHEbl/PPTWYQQjvjVCVuqGR4GYv7sEXLIg==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-99d0b872ee54fd3afae4675a7592394fa9d65696f8ad7a751b79704bc999f40a.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-4dcecdbd59af4cd1dd8cf24ccaf35b686d848468ddcd7d52a8bf57c21ac4e5fb.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="efb9989cb4226240c2c00e5cb6693560">

      
  <meta name="description" content="smoothState.js - A jQuery plugin to stop the jank of page loads.">
  <meta name="go-import" content="github.com/miguel-perez/smoothState.js git https://github.com/miguel-perez/smoothState.js.git">

  <meta content="1682551" name="octolytics-dimension-user_id" /><meta content="miguel-perez" name="octolytics-dimension-user_login" /><meta content="23242318" name="octolytics-dimension-repository_id" /><meta content="miguel-perez/smoothState.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="true" name="octolytics-dimension-repository_is_fork" /><meta content="21748166" name="octolytics-dimension-repository_parent_id" /><meta content="weblinc/jquery.smoothState.js" name="octolytics-dimension-repository_parent_nwo" /><meta content="21748166" name="octolytics-dimension-repository_network_root_id" /><meta content="weblinc/jquery.smoothState.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/miguel-perez/smoothState.js/commits/master.atom" rel="alternate" title="Recent Commits to smoothState.js:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production macintosh vis-public fork">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      


        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/miguel-perez/smoothState.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/miguel-perez/smoothState.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item explore">
            <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
          </li>
            <li class="header-nav-item">
              <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
            </li>
            <li class="header-nav-item">
              <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
            </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
          </li>
      </ul>

      
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/davetheapple" data-ga-click="Header, go to profile, text:username">
      <img alt="@davetheapple" class="avatar" data-user="7998515" height="20" src="https://avatars0.githubusercontent.com/u/7998515?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">davetheapple</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="/new" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu">
        
<li>
  <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
</li>
<li>
  <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
</li>


  <li class="dropdown-divider"></li>
  <li class="dropdown-header">
    <span title="miguel-perez/smoothState.js">This repository</span>
  </li>
    <li>
      <a href="/miguel-perez/smoothState.js/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>

      </ul>
    </div>
  </li>

  <li class="header-nav-item">
      <span 
        data-channel="notification-changed:davetheapple"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status all-read"></span>
          <span class="octicon octicon-inbox"></span>
</a>  </span>

  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="J3IbhSb7JFP5xqDaM3SUIxCEjPyLBrlkIMfJAA7dWxX3OOVTrRfRpHVl8ch+fg7CTcnRZvSJU4TEyo/TmmWYjA==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>



    
  </div>
</div>

        

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="+51r4Bw3769SN7wOISBKDnthdnvBRM1eUhMOJxz7I+eMw2AOiG2sTJdGjLGZOZf3NM1Zs4fiUADStnwFa0oBag==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="23242318" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/miguel-perez/smoothState.js/subscription"
          class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:files#disambiguate">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/miguel-perez/smoothState.js/watchers">
          22
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/miguel-perez/smoothState.js/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="eL+1UAUc+jdtVRNpn1eXmDHTyau/b/7EqnSKubhtNkiTEjnJZ4WyzL1zZz0R9DnS7H4H13I3dXggiUinQWiQFA==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar miguel-perez/smoothState.js"
        data-ga-click="Repository, click unstar button, action:files#disambiguate; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/miguel-perez/smoothState.js/stargazers">
          156
        </a>
</form>
    <form accept-charset="UTF-8" action="/miguel-perez/smoothState.js/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="92Xh7GlpPEPdMqD1bJAKKkUKiwOMoHo7eQi0sCp3g/T2JVnzpHtyCkwKxvTkrz7Ep4SFBO9T6ypnG9TnYVvSBQ==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star miguel-perez/smoothState.js"
        data-ga-click="Repository, click star button, action:files#disambiguate; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/miguel-perez/smoothState.js/stargazers">
          156
        </a>
</form>  </div>

  </li>

        <li>
          <form accept-charset="UTF-8" action="/miguel-perez/smoothState.js/fork" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="rLuN6UNxIVK2dR8tasTJztQv8dSZ4BOi813rvCWgqNQyS3UYDyf1mNEWwvbZ9Rml4zX5Hc+u87APyKVNhtMK1A==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:files#disambiguate; text:Fork"
                title="Fork your own copy of miguel-perez/smoothState.js to your account"
                aria-label="Fork your own copy of miguel-perez/smoothState.js to your account">
              <span class="octicon octicon-repo-forked"></span>
              Fork
            </button>
            <a href="/miguel-perez/smoothState.js/network" class="social-count">212</a>
</form>        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo-forked"></span>
          <span class="author"><a href="/miguel-perez" class="url fn" itemprop="url" rel="author"><span itemprop="title">miguel-perez</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/miguel-perez/smoothState.js" class="js-current-repository" data-pjax="#js-repo-pjax-container">smoothState.js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

            <span class="fork-flag">
              <span class="text">forked from <a href="/weblinc/jquery.smoothState.js">weblinc/jquery.smoothState.js</a></span>
            </span>
        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline with-full-navigation ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/miguel-perez/smoothState.js/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/miguel-perez/smoothState.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /miguel-perez/smoothState.js">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/miguel-perez/smoothState.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /miguel-perez/smoothState.js/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/miguel-perez/smoothState.js/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /miguel-perez/smoothState.js/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/miguel-perez/smoothState.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /miguel-perez/smoothState.js/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/miguel-perez/smoothState.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /miguel-perez/smoothState.js/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/miguel-perez/smoothState.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /miguel-perez/smoothState.js/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/miguel-perez/smoothState.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:miguel-perez/smoothState.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/miguel-perez/smoothState.js" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="https://mac.github.com" class="btn btn-sm sidebar-button" title="Save miguel-perez/smoothState.js to your computer and use it in GitHub Desktop." aria-label="Save miguel-perez/smoothState.js to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>



                <a href="/miguel-perez/smoothState.js/archive/master.zip"
                   class="btn btn-sm sidebar-button"
                   aria-label="Download the contents of miguel-perez/smoothState.js as a zip file"
                   title="Download the contents of miguel-perez/smoothState.js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          
<span id="js-show-full-navigation"></span>

<div class="repository-meta js-details-container ">
    <div class="repository-description">
      A jQuery plugin to stop the jank of page loads.
    </div>

    <div class="repository-website">
      <p><a href="http://miguel-perez.github.io/smoothState.js/" rel="nofollow">http://miguel-perez.github.io/smoothState.js/</a></p>
    </div>


</div>

<div class="overall-summary overall-summary-bottomless">

  <div class="stats-switcher-viewport js-stats-switcher-viewport">
    <div class="stats-switcher-wrapper">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/miguel-perez/smoothState.js/commits/master">
            <span class="octicon octicon-history"></span>
            <span class="num text-emphasized">
              137
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/miguel-perez/smoothState.js/branches">
          <span class="octicon octicon-git-branch"></span>
          <span class="num text-emphasized">
            2
          </span>
          branches
        </a>
      </li>

      <li>
        <a data-pjax href="/miguel-perez/smoothState.js/releases">
          <span class="octicon octicon-tag"></span>
          <span class="num text-emphasized">
            11
          </span>
          releases
        </a>
      </li>

      <li>
        
  <a href="/miguel-perez/smoothState.js/graphs/contributors">
    <span class="octicon octicon-organization"></span>
    <span class="num text-emphasized">
      9
    </span>
    contributors
  </a>
      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/miguel-perez/smoothState.js/search?l=javascript">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">100%</span>
              </a>
          </li>
        </ol>
      </div>
    </div>
  </div>

</div>

  <div class="repository-lang-stats-graph js-toggle-lang-stats" title="Click for language details">
    <span class="language-color" aria-label="JavaScript 100%" style="width:100%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span>
  </div>

<include-fragment src="/miguel-perez/smoothState.js/show_partial?partial=recently_touched_branches_list"></include-fragment>

<div class="file-navigation in-mid-page">
  <a href="/miguel-perez/smoothState.js/find/master"
        class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s right"
        data-pjax
        data-hotkey="t"
        aria-label="Quickly jump between files">
    <span class="octicon octicon-list-unordered"></span>
  </a>
    <a href="/miguel-perez/smoothState.js/compare" aria-label="Compare, review, create a pull request" class="btn btn-sm btn-primary tooltipped tooltipped-se left compare-button" aria-label="Compare &amp; review" data-pjax data-ga-click="Repository, go to compare view, location:repo overview; icon:git-compare">
      <span class="octicon octicon-git-compare"></span>
    </a>

  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/miguel-perez/smoothState.js/tree/gh-pages"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/miguel-perez/smoothState.js/tree/master"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/miguel-perez/smoothState.js/tree/0.5.1"
                 data-name="0.5.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.5.1">0.5.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/miguel-perez/smoothState.js/tree/0.5.0"
                 data-name="0.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.5.0">0.5.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/miguel-perez/smoothState.js/tree/0.4.1"
                 data-name="0.4.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.4.1">0.4.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/miguel-perez/smoothState.js/tree/0.4.0"
                 data-name="0.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.4.0">0.4.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/miguel-perez/smoothState.js/tree/0.3.1"
                 data-name="0.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.3.1">0.3.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/miguel-perez/smoothState.js/tree/0.3.0"
                 data-name="0.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.3.0">0.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/miguel-perez/smoothState.js/tree/0.2.1"
                 data-name="0.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.1">0.2.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/miguel-perez/smoothState.js/tree/0.2.0"
                 data-name="0.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.0">0.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/miguel-perez/smoothState.js/tree/0.1.2"
                 data-name="0.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.2">0.1.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/miguel-perez/smoothState.js/tree/0.1.1"
                 data-name="0.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.1">0.1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/miguel-perez/smoothState.js/tree/0.1.0"
                 data-name="0.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.0">0.1.0</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>



  <div class="breadcrumb"><span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/miguel-perez/smoothState.js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">smoothState.js</span></a></span></span><span class="separator">/</span>
    <form accept-charset="UTF-8" action="/miguel-perez/smoothState.js/new/master" class="js-new-blob-form inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="03KKaechXvVzcACEj7gDU+LZfMkREtw1KTTJ/iqIOvKQi9MYEQQLC2YHFwmgYOaU0Q3bwbmZ36YQ1NOiORqX/g==" /></div>
      <button class="btn-link tooltipped tooltipped-e" type="submit" data-disable-with="working…" aria-label="Fork this project and create a new file">
        <span class="js-new-blob-submit octicon octicon-plus" data-test-id="create-new-git-file"></span>
      </button>
</form></div>
</div>


    <div class="branch-infobar clearfix">
        <p>
          This branch is even with weblinc:master
        </p>

      <ul class="lightweight-actions">
        <li>
            <a href="/miguel-perez/smoothState.js/pull/new/master">
              <span class="octicon octicon-git-pull-request"></span>
              Pull Request
            </a>
        </li>
        <li>
          <a href="/miguel-perez/smoothState.js/compare">
            <span class="octicon octicon-diff"></span>
            Compare
          </a>
        </li>
      </ul>

    </div>

  
  <div class="commit commit-tease js-details-container" >
    <p class="commit-title ">
        <a href="/miguel-perez/smoothState.js/commit/ca4cb0f0add7d1eace7812cfa94af41c587b54fc" class="message" data-pjax="true" title="Merge pull request #99 from rolandschuetz/master

More lightweight redrawing.">Merge pull request</a> <a href="https://github.com/weblinc/jquery.smoothState.js/pull/99" class="issue-link" title="More lightweight redrawing.">#99</a> <a href="/miguel-perez/smoothState.js/commit/ca4cb0f0add7d1eace7812cfa94af41c587b54fc" class="message" data-pjax="true" title="Merge pull request #99 from rolandschuetz/master

More lightweight redrawing.">from rolandschuetz/master</a>
        <span class="hidden-text-expander inline"><a href="#" class="js-details-target">…</a></span>
    </p>
      <div class="commit-desc"><pre>More lightweight redrawing.</pre></div>
    <div class="commit-meta">
      <button aria-label="Copy SHA" class="js-zeroclipboard zeroclipboard-link tooltipped tooltipped-s" data-clipboard-text="ca4cb0f0add7d1eace7812cfa94af41c587b54fc" data-copied-hint="Copied!" data-copy-hint="Copy SHA" type="button"><span class="octicon octicon-clippy"></span></button>
      <a href="/miguel-perez/smoothState.js/commit/ca4cb0f0add7d1eace7812cfa94af41c587b54fc" class="sha-block" data-pjax>latest commit <span class="sha">ca4cb0f0ad</span></a>

      <div class="authorship">
        <img alt="@miguel-perez" class="avatar" data-user="1682551" height="20" src="https://avatars1.githubusercontent.com/u/1682551?v=3&amp;s=40" width="20" />
        <span class="author-name"><a href="/miguel-perez" rel="author">miguel-perez</a></span>
        authored <time class="updated" datetime="2014-10-28T14:21:51Z" is="relative-time">Oct 28, 2014</time>

      </div>
    </div>
  </div>

  
<div class="file-wrap">
  <a href="/miguel-perez/smoothState.js/tree/ca4cb0f0add7d1eace7812cfa94af41c587b54fc" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <table class="files" data-pjax>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><span class="octicon octicon-alert"></span></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr>
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/miguel-perez/smoothState.js/tree/master/tests" class="js-directory-link" id="b61a6d542f9036550ba9c401c80f00ef-e7c6bd0588112e27146fad46330da6b8311e33ee" title="tests">tests</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/miguel-perez/smoothState.js/commit/53d38dd1d181a0dc1d2a2199225892b5ea854d16" class="message" data-pjax="true" title="Add unit tests">Add unit tests</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-08-13T18:11:34Z" is="time-ago">Aug 13, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/miguel-perez/smoothState.js/blob/master/.jshintrc" class="js-directory-link" id="4d5aa81bf4f18104bb6ea53a8b5d1f43-480853b60215ba697c47288f6d02ce066f2ed855" title=".jshintrc">.jshintrc</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/miguel-perez/smoothState.js/commit/848f3b853617903cccba56f201f14914fb28d254" class="message" data-pjax="true" title="Improved code style and fixed linting errors">Improved code style and fixed linting errors</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-09-27T20:04:11Z" is="time-ago">Sep 27, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/miguel-perez/smoothState.js/blob/master/LICENSE.md" class="js-directory-link" id="37854d19817c792316d481f5beb93cc7-5bc2f2122aa117d5c336af5c155872b3718c2c9a" title="LICENSE.md">LICENSE.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/miguel-perez/smoothState.js/commit/f938d179bfffd071861e81c769a7cd1aa12eb7fe" class="message" data-pjax="true" title="Create LICENSE.md">Create LICENSE.md</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-07-23T15:39:15Z" is="time-ago">Jul 23, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/miguel-perez/smoothState.js/blob/master/README.md" class="js-directory-link" id="04c6e90faac2675aa89e2176d2eec7d8-f5b1fb01d37f43c3d5a51293f18a99ed462b3948" title="README.md">README.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/miguel-perez/smoothState.js/commit/59f4bdecd7d697e463866fc13989d49b458dd477" class="message" data-pjax="true" title="Puh, finally fixed intentation">Puh, finally fixed intentation</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-09-26T20:22:46Z" is="time-ago">Sep 26, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/miguel-perez/smoothState.js/blob/master/bower.json" class="js-directory-link" id="0a08a7565aba4405282251491979bb6b-536ec84c77cad9dc2df1047cfa7f12cc53babd26" title="bower.json">bower.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/miguel-perez/smoothState.js/commit/18206782be634c8bbaecb5d4a15e968acd43cf7a" class="message" data-pjax="true" title="Update bower.json">Update bower.json</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-08-18T12:47:06Z" is="time-ago">Aug 18, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/miguel-perez/smoothState.js/blob/master/jquery.smoothState.js" class="js-directory-link" id="fa4782971206aa80dbaac77636ba9210-fe075945db9afc8d0e573e00ec8d0f855e39d30c" title="jquery.smoothState.js">jquery.smoothState.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/miguel-perez/smoothState.js/commit/325e87b31f05543bbb4a902c41dac80b926c56e0" class="message" data-pjax="true" title="More lightweight redrawing.
I could not find any szenario in which this solution isn&#39;t sufficient. But I and many others (see issues) run into problem with the old solution, which requires two full repaints.">More lightweight redrawing.</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-10-10T13:59:15Z" is="time-ago">Oct 10, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/miguel-perez/smoothState.js/blob/master/smoothState.jquery.json" class="js-directory-link" id="0038f8e81a2dad3f2d4eedc0b4453b18-7fad5030471a0c86e5b8d30ac221937494a11a22" title="smoothState.jquery.json">smoothState.jquery.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/miguel-perez/smoothState.js/commit/e4691cf06b079910fde039079bf0eaa3bbcfe8aa" class="message" data-pjax="true" title="Update smoothState.jquery.json">Update smoothState.jquery.json</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-09-01T14:04:57Z" is="time-ago">Sep 1, 2014</time></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>


  <div id="readme" class="boxed-group flush clearfix announce instapaper_body md">
    <h3>
      <span class="octicon octicon-book"></span>
      README.md
    </h3>

    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1>
<a id="user-content-jquerysmoothstatejs" class="anchor" href="#jquerysmoothstatejs" aria-hidden="true"><span class="octicon octicon-link"></span></a>jquery.smoothState.js</h1>

<p><a href="http://weblinc.github.io/jquery.smoothState.js/index.html">Checkout the demo site</a> for examples and tutorials. <a href="https://twitter.com/tayokoart">Let me know</a> if you have any questions.</p>

<ul class="task-list">
<li><a href="#about">About</a></li>
<li>
<a href="#options">Options</a>

<ul class="task-list">
<li><a href="#prefetch">prefetch</a></li>
<li><a href="#blacklist">blacklist</a></li>
<li><a href="#development">development</a></li>
<li><a href="#pagecachesize">pageCacheSize</a></li>
<li><a href="#alterrequesturl">alterRequestUrl</a></li>
</ul>
</li>
<li>
<a href="#callbacks">Callbacks</a>

<ul class="task-list">
<li><a href="#onstart">onStart</a></li>
<li><a href="#onprogress">onProgress</a></li>
<li><a href="#onend">onEnd</a></li>
<li><a href="#callback">callback</a></li>
</ul>
</li>
<li>
<a href="#methods-and-properties">Methods and properties</a>

<ul class="task-list">
<li><a href="#href">href</a></li>
<li><a href="#cache">cache</a></li>
<li><a href="#loadurl">load</a></li>
<li><a href="#fetchurl">fetch</a></li>
<li><a href="#toggleanimationclassclassname">toggleAnimationClass</a></li>
</ul>
</li>
<li><a href="#show-your-work">Show your work!</a></li>
<li>
<a href="#need-help">Need help?</a>

<ul class="task-list">
<li><a href="#how-to-ask-for-help">How to ask for help</a></li>
<li><a href="#faqs">FAQs</a></li>
</ul>
</li>
</ul>

<h2>
<a id="user-content-about" class="anchor" href="#about" aria-hidden="true"><span class="octicon octicon-link"></span></a>About</h2>

<p>Hard cuts and white flashes break user focus and create confusion as layouts change or elements rearrange. <strong>We’ve accepted the jankiness of page loads as a personality quirk of the web</strong>, even though there is no technical reason it must exist. We don't need to treat the web like a native app's ugly cousin.</p>

<p>Javascript <a href="http://en.wikipedia.org/wiki/Single-page_application">SPA frameworks</a>, sometimes referred to as MVC frameworks, are a common way to solve this issue. However, these frameworks often <strong>lose the benefits of unobtrusive code</strong>, such as resilience to errors, performance, and accessibility. smoothState.js lets you start adding transitions that eliminate the hard cuts of page loads to improve the beauty of the experience. It does this with:</p>

<ul class="task-list">
<li>
<strong>Progressive enhancement</strong> - a technique that exemplifies the principles universal design</li>
<li>
<strong>jQuery</strong> - a library a great many of us are familiar with</li>
<li>
<strong>history.pushState()</strong> - a method that lets us maintain browsing expectations</li>
<li>
<strong>Ajax</strong> - a way for us to  request and store pages on the user's device without refreshing the page</li>
</ul>

<p>smoothState.js will <a href="http://en.wikipedia.org/wiki/Unobtrusive_JavaScript">unobtrusively enhance</a> your website's page loads to behave more like a single-page application framework. This allows you to add page transitions and create a nicer experince for your users.</p>

<h2>
<a id="user-content-options" class="anchor" href="#options" aria-hidden="true"><span class="octicon octicon-link"></span></a>Options</h2>

<p>smoothState provides some options that allow you to customize the functionality of the plugin.</p>

<h3>
<a id="user-content-prefetch" class="anchor" href="#prefetch" aria-hidden="true"><span class="octicon octicon-link"></span></a><code>prefetch</code>
</h3>

<p>There is a 200ms to 300ms delay between the time that a user hovers over a link and the time they click it. On touch screens, the delay between the touchstart and touchend is even greater. If the prefetch option is set to true, smoothState will begin to preload the contents of the url between that delay.</p>

<p>This technique will dramatically increase the speed of your website.</p>

<h3>
<a id="user-content-blacklist" class="anchor" href="#blacklist" aria-hidden="true"><span class="octicon octicon-link"></span></a><code>blacklist</code>
</h3>

<p>A string that is used as a jQuery selector to ignore certain links. By default smoothState will ignore any links that match <code>".no-smoothstate, [target]"</code>.</p>

<h3>
<a id="user-content-development" class="anchor" href="#development" aria-hidden="true"><span class="octicon octicon-link"></span></a><code>development</code>
</h3>

<p>A boolean, default being <code>false</code>, that will tell smoothState to output useful debug info when something goes wrong in console instead of trying to abort and reload the page. </p>

<h3>
<a id="user-content-pagecachesize" class="anchor" href="#pagecachesize" aria-hidden="true"><span class="octicon octicon-link"></span></a><code>pageCacheSize</code>
</h3>

<p>smoothState.js will store pages in memory if pageCacheSize is set to anything greater than 0. This allows a user to avoid having to request pages more than once. Pages that are stored in memory will load instantaneously.</p>

<h3>
<a id="user-content-alterrequesturl" class="anchor" href="#alterrequesturl" aria-hidden="true"><span class="octicon octicon-link"></span></a><code>alterRequestUrl</code>
</h3>

<p>A function that defines any alterations needed on the URL that is used to request content from the server. The function should return a string that is a valid URL. This is useful when dealing with applications that have layout controls or when needing to inavlidate the cache.</p>

<h2>
<a id="user-content-callbacks" class="anchor" href="#callbacks" aria-hidden="true"><span class="octicon octicon-link"></span></a>Callbacks</h2>

<h3>
<a id="user-content-onstart" class="anchor" href="#onstart" aria-hidden="true"><span class="octicon octicon-link"></span></a><code>onStart</code>
</h3>

<p>Ran when a link has been activated, a "click". Default:</p>

<pre lang="Javanscript"><code>onStart : {
    duration: 0, // Duration of the animations, if any.
    render: function (url, $container) {
        $body.scrollTop(0);
    }
},
</code></pre>

<h3>
<a id="user-content-onprogress" class="anchor" href="#onprogress" aria-hidden="true"><span class="octicon octicon-link"></span></a><code>onProgress</code>
</h3>

<p>Ran if the page request is still pending and onStart has finished animating.Default:</p>

<pre lang="Javanscript"><code>onProgress : {
    duration: 0, // Duration of the animations, if any.
    render: function (url, $container) {
        $body.css('cursor', 'wait');
        $body.find('a').css('cursor', 'wait');
    }
},
</code></pre>

<h3>
<a id="user-content-onend" class="anchor" href="#onend" aria-hidden="true"><span class="octicon octicon-link"></span></a><code>onEnd</code>
</h3>

<p>Ran when requested content is ready to be injected into the page</p>

<pre lang="Javanscript"><code>onEnd : {
    duration: 0, // Duration of the animations, if any.
    render: function (url, $container, $content) {
        $body.css('cursor', 'auto');
        $body.find('a').css('cursor', 'auto');
        $container.html($content);
    }
},
</code></pre>

<h3>
<a id="user-content-callback" class="anchor" href="#callback" aria-hidden="true"><span class="octicon octicon-link"></span></a><code>callback</code>
</h3>

<p>Ran after the new content has been injected into the page</p>

<pre lang="Javanscript"><code>callback : function(url, $container, $content) {

}
</code></pre>

<h2>
<a id="user-content-methods-and-properties" class="anchor" href="#methods-and-properties" aria-hidden="true"><span class="octicon octicon-link"></span></a>Methods and properties</h2>

<p>smoothState provides some methods available by accessing the element's data property.</p>

<div class="highlight highlight-javascript"><pre><span class="pl-k">var</span> content  <span class="pl-k">=</span> $(<span class="pl-s"><span class="pl-pds">'</span>#main<span class="pl-pds">'</span></span>).smoothState().<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">'</span>smoothState<span class="pl-pds">'</span></span>);
content.<span class="pl-c1">load</span>(<span class="pl-s"><span class="pl-pds">'</span>/newPage.html<span class="pl-pds">'</span></span>);
</pre></div>

<h3>
<a id="user-content-href" class="anchor" href="#href" aria-hidden="true"><span class="octicon octicon-link"></span></a><code>href</code>
</h3>

<p>Url of the content that is currently displayed.</p>

<h3>
<a id="user-content-cache" class="anchor" href="#cache" aria-hidden="true"><span class="octicon octicon-link"></span></a><code>cache</code>
</h3>

<p>Variable that stores pages after they are requested.</p>

<h3>
<a id="user-content-loadurl" class="anchor" href="#loadurl" aria-hidden="true"><span class="octicon octicon-link"></span></a><code>load(url)</code>
</h3>

<p>Loads the contents of a url into our container.</p>

<h3>
<a id="user-content-fetchurl" class="anchor" href="#fetchurl" aria-hidden="true"><span class="octicon octicon-link"></span></a><code>fetch(url)</code>
</h3>

<p>Fetches the contents of a url and stores it in the 'cache' varible.</p>

<h3>
<a id="user-content-toggleanimationclassclassname" class="anchor" href="#toggleanimationclassclassname" aria-hidden="true"><span class="octicon octicon-link"></span></a><code>toggleAnimationClass(classname)</code>
</h3>

<p>Used to restart css animations with a class.</p>

<h2>
<a id="user-content-show-your-work" class="anchor" href="#show-your-work" aria-hidden="true"><span class="octicon octicon-link"></span></a>Show your work!</h2>

<p>I'd love to see how this gets used in the wild. <a href="https://twitter.com/tayokoart">Tweet me</a> with a link and I'll add it to this page. This repo could use some good demos.</p>

<h2>
<a id="user-content-need-help" class="anchor" href="#need-help" aria-hidden="true"><span class="octicon octicon-link"></span></a>Need help?</h2>

<p>If you find yourself confused, add an issue explaining your problem. Doing so will help me improve the clarity of the documentation and get us thinking about use cases and potential upgrades. I'm all ears.</p>

<h3>
<a id="user-content-how-to-ask-for-help" class="anchor" href="#how-to-ask-for-help" aria-hidden="true"><span class="octicon octicon-link"></span></a>How to ask for help</h3>

<ol class="task-list">
<li>Search existing issues for similar questions.</li>
<li>If you couldn't find anything, create a new <a href="https://github.com/weblinc/jquery.smoothState.js/issues/">Github issue</a>.
To enable us to quickly process, reproduce and fix bugs or give you support we will need to gather from you a few details regarding your environment, steps to reproduce the issue, and a stand-alone test case. </li>
</ol>

<p>Please use the template below:</p>

<pre><code>__smoothState.js version tested:__
 - Version X.X.X

__Browser versions or Packager version tested against:__
 - IE10/11
 - Chrome
 - Safari
 - ___

__Description:__
 - Describe the problem in greater detail here, summarizing the behavior. 
 - If you are facing a CSS error please provide screenshots or a online example.
 - If you are facing a JavaScript error please at the line number and the stacktrace.

__Steps to reproduce the problem:__
 - foo
 - bar

__The result that was expected:__
 - foo
 - bar

__The result that occurs instead:__
 - foo
 - bar

__The url to testcase:__
It's the easiest way for us to debug your problem if you add a minimal test case. 
Make a http://jsfiddle.net/ and use use "echo" to simulate ajax responses, 
see http://doc.jsfiddle.net/use/echo.html

__Possible solution:__
If you already have debugged the problem and have a solution, please add it here.
</code></pre>

<h3>
<a id="user-content-faqs" class="anchor" href="#faqs" aria-hidden="true"><span class="octicon octicon-link"></span></a>FAQs</h3>

<p>Coming soon...</p>
</article>
  </div>


        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.07272s from github-fe125-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-2c8ae50712a47d2b83d740cb875d55cdbbb3fdbccf303951cc6b7e63731e0c38.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-3db81a421ebe0d913a89557241623ecef42b40a31f8425a3f46f09d84b0028a1.js"></script>
      
      

      <div class="js-socket-channel" data-channel="test:davetheapple"></div>

  </body>
</html>

