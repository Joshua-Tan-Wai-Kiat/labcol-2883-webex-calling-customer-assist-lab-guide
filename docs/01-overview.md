# Overview {#overview}

<p>This lab offers step-by-step guidance for migrating an on-premises
Auto Attendant (from Unity Connection's call handler configuration) and
call queues (from Unified Communications Manager's Hunt Pilot queueing
configuration). It includes assigning Webex Calling Customer Assist
licenses to users designated as agents and supervisors. Additionally,
you will learn how to configure advanced features such as Screen Pop and
explore the Agent and Supervisor desktops. As part of the Customer
Assist feature set, you'll also gain hands-on experience with queue
analytics.</p>

<p>In this overview, we will examine a sample helpdesk call flow
configured in CUCM and Unity Connection to be migrated to Webex Calling
Customer Assist. The Walk-In Labs hands-on session begins with <a href="03-task-1-accessing-your-lab.html#task-1-accessing-your-lab"><strong>Task 1: Accessing your Lab [5
minutes]</strong></a>.</p>

### Complete Call Flow {#complete-call-flow}

<p>Below is the complete call flow for Call Handler and Hunt Pilot
Queues that will be migrated to Webex Calling as Customer Assist
configuration:</p>

<p><img alt="Lab guide screenshot 2" height="526" loading="lazy" src="assets/images/image2.png" style="max-width:100%;height:auto;" width="1546"/></p>

<p>List of agents and supervisor:</p>

<table style="width:98%;">
<colgroup>
<col style="width: 19%"/>
<col style="width: 13%"/>
<col style="width: 38%"/>
<col style="width: 13%"/>
<col style="width: 15%"/>
</colgroup>
<thead>
<tr>
<th style="text-align: left;">User</th>
<th>User Extension</th>
<th style="text-align: left;">Queue</th>
<th style="text-align: left;">Queue Extension</th>
<th style="text-align: left;">Role</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">Charles Holland</td>
<td>6018</td>
<td style="text-align: left;">&lt;none&gt;</td>
<td style="text-align: left;">&lt;none&gt;</td>
<td style="text-align: left;">Call-in user</td>
</tr>
<tr>
<td style="text-align: left;">Anita Perez</td>
<td>6017</td>
<td style="text-align: left;">Q1_WebexCallingSupport</td>
<td style="text-align: left;">6501</td>
<td style="text-align: left;">Agent</td>
</tr>
<tr>
<td style="text-align: left;">Kellie Melby</td>
<td>6050</td>
<td style="text-align: left;">Q1_WebexCallingSupport</td>
<td style="text-align: left;">6501</td>
<td style="text-align: left;">Agent</td>
</tr>
<tr>
<td style="text-align: left;">Taylor Bard</td>
<td>6026</td>
<td style="text-align: left;">Q1_WebexCallingSupport<br/>
Q2_WebexContactCenterSupport</td>
<td style="text-align: left;">6501<br/>
6502</td>
<td style="text-align: left;">Supervisor</td>
</tr>
</tbody>
</table>

<p>Additional Customer Assist features that can be configured after
migrating the configuration over to Webex Calling:</p>

<table>
<colgroup>
<col style="width: 45%"/>
<col style="width: 54%"/>
</colgroup>
<thead>
<tr>
<th><ul>
<li><p>Screen Pop</p></li>
<li><p>Call back</p></li>
<li><p>Night Service</p></li>
<li><p>Bounced Calls</p></li>
</ul></th>
<th><ul>
<li><p>Wrap-up reasons</p></li>
<li><p>Stranded Calls</p></li>
<li><p>Estimated Wait Time announcement</p></li>
<li><p>Queue position announcement</p></li>
</ul></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

### Call Handler Configuration in Unity Connection {#call-handler-configuration-in-unity-connection}

<p>Below is overview of current call handler configuration in Unity
Connection &gt; Call Management &gt; System Call Handler – for this
lab.</p>

<p><img alt="Lab guide screenshot 3" height="1312" loading="lazy" src="assets/images/image3.png" style="max-width:100%;height:auto;" width="2656"/></p>

<p><img alt="Lab guide screenshot 4" height="1558" loading="lazy" src="assets/images/image4.png" style="max-width:100%;height:auto;" width="3212"/></p>

### Hunt Pilot Queuing in Unified Communications Manager {#hunt-pilot-queuing-in-unified-communications-manager}

<p>Below is one of the two call queues configuration in Unified
Communications Manager &gt; Call Routing &gt; Route/Hunt &gt; Hunt Pilot
– for this lab.</p>

<p><img alt="Lab guide screenshot 5" height="1041" loading="lazy" src="assets/images/image5.png" style="max-width:100%;height:auto;" width="1037"/></p>

<table style="width:100%;">
<colgroup>
<col style="width: 11%"/>
<col style="width: 88%"/>
</colgroup>
<thead>
<tr>
<th></th>
<th style="text-align: left;"><p><strong>Note:</strong></p>
<ul>
<li><p>The "Queue Calls" box must be checked to indicate that this Hunt
Pilot in Unified Communications Manager is configured as a call
queue.</p></li>
<li><p>If the box is not checked, it will be considered as a Hunt Group
only.</p></li>
</ul></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

### Migration Utilities in Control Hub {#migration-utilities-in-control-hub}

<p>In this lab, you will be using “Migrate features from UCM” found in
Updates &amp; Migrations under the Services section on Control Hub.</p>

<p><img alt="Lab guide screenshot 6" height="536" loading="lazy" src="assets/images/image6.png" style="max-width:100%;height:auto;" width="928"/></p>

<p><img alt="Lab guide screenshot 7" height="535" loading="lazy" src="assets/images/image7.png" style="max-width:100%;height:auto;" width="952"/></p>

<p><strong>#4 – Migrate features from UCM:</strong> Use this tool to
migrate speed dials, Call Park, virtual lines, Auto Attendant, Call
Queue, Hunt Groups, etc. We will use this tool to migrate Auto Attendant
and Call Queue for this lab.</p>
