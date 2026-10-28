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
## Complete Call Flow {#complete-call-flow}
<p>Below is the complete call flow for Call Handler and Hunt Pilot
Queues that will be migrated to Webex Calling as Customer Assist
configuration:</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 2" class="screenshot-link" href="assets/images/image2.png"><img alt="Lab guide screenshot 2" class="lab-screenshot" height="526" loading="lazy" src="assets/images/image2.png" width="1546"/></a></figure>
<p>List of agents and supervisor:</p>
<div aria-label="Lab reference table" class="table-scroll" role="region" tabindex="0"><table>

<thead>
<tr>
<th>User</th>
<th>User Extension</th>
<th>Queue</th>
<th>Queue Extension</th>
<th>Role</th>
</tr>
</thead>
<tbody>
<tr>
<td>Charles Holland</td>
<td>6018</td>
<td>&lt;none&gt;</td>
<td>&lt;none&gt;</td>
<td>Call-in user</td>
</tr>
<tr>
<td>Anita Perez</td>
<td>6017</td>
<td>Q1_WebexCallingSupport</td>
<td>6501</td>
<td>Agent</td>
</tr>
<tr>
<td>Kellie Melby</td>
<td>6050</td>
<td>Q1_WebexCallingSupport</td>
<td>6501</td>
<td>Agent</td>
</tr>
<tr>
<td>Taylor Bard</td>
<td>6026</td>
<td>Q1_WebexCallingSupport<br/>
Q2_WebexContactCenterSupport</td>
<td>6501<br/>
6502</td>
<td>Supervisor</td>
</tr>
</tbody>
</table></div>
<p>Additional Customer Assist features that can be configured after
migrating the configuration over to Webex Calling:</p>
<div class="instruction-panel"><div><ul>
<li><p>Screen Pop</p></li>
<li><p>Call back</p></li>
<li><p>Night Service</p></li>
<li><p>Bounced Calls</p></li>
</ul></div><div><ul>
<li><p>Wrap-up reasons</p></li>
<li><p>Stranded Calls</p></li>
<li><p>Estimated Wait Time announcement</p></li>
<li><p>Queue position announcement</p></li>
</ul></div></div>
## Call Handler Configuration in Unity Connection {#call-handler-configuration-in-unity-connection}
<p>Below is overview of current call handler configuration in Unity
Connection &gt; Call Management &gt; System Call Handler – for this
lab.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 3" class="screenshot-link" href="assets/images/image3.png"><img alt="Lab guide screenshot 3" class="lab-screenshot" height="1312" loading="lazy" src="assets/images/image3.png" width="2656"/></a></figure>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 4" class="screenshot-link" href="assets/images/image4.png"><img alt="Lab guide screenshot 4" class="lab-screenshot" height="1558" loading="lazy" src="assets/images/image4.png" width="3212"/></a></figure>
## Hunt Pilot Queuing in Unified Communications Manager {#hunt-pilot-queuing-in-unified-communications-manager}
<p>Below is one of the two call queues configuration in Unified
Communications Manager &gt; Call Routing &gt; Route/Hunt &gt; Hunt Pilot
– for this lab.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 5" class="screenshot-link" href="assets/images/image5.png"><img alt="Lab guide screenshot 5" class="lab-screenshot" height="1041" loading="lazy" src="assets/images/image5.png" width="1037"/></a></figure>
<aside class="lab-note" role="note"><p><strong>Note:</strong></p>
<ul>
<li><p>The "Queue Calls" box must be checked to indicate that this Hunt
Pilot in Unified Communications Manager is configured as a call
queue.</p></li>
<li><p>If the box is not checked, it will be considered as a Hunt Group
only.</p></li>
</ul></aside>
## Migration Utilities in Control Hub {#migration-utilities-in-control-hub}
<p>In this lab, you will be using “Migrate features from UCM” found in
Updates &amp; Migrations under the Services section on Control Hub.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 6" class="screenshot-link" href="assets/images/image6.png"><img alt="Lab guide screenshot 6" class="lab-screenshot" height="536" loading="lazy" src="assets/images/image6.png" width="928"/></a></figure>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 7" class="screenshot-link" href="assets/images/image7.png"><img alt="Lab guide screenshot 7" class="lab-screenshot" height="535" loading="lazy" src="assets/images/image7.png" width="952"/></a></figure>
<p><strong>#4 – Migrate features from UCM:</strong> Use this tool to
migrate speed dials, Call Park, virtual lines, Auto Attendant, Call
Queue, Hunt Groups, etc. We will use this tool to migrate Auto Attendant
and Call Queue for this lab.</p>
