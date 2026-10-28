# Advance Call Queue Configuration {#task-9-advance-call-queue-configuration-5-minutes}

<div class="page-meta">LABCOL-2883 <span>Task 9</span><span>5 minutes</span></div>
## Step 1: Screen Pop {#step-1-screen-pop}
<p>You can configure screen pop settings to display the customer
information screen on the Agent's desktop when an agent answers an
incoming call.</p>
<div aria-label="Lab reference table" class="table-scroll" role="region" tabindex="0"><table>

<thead>
<tr>
<th><p>Screen Pop URL</p>
<p>[required]</p></th>
<th>Screen Pop Desktop Label [optional]</th>
<th><p>Key 1</p>
<p>[required]</p></th>
<th><p>Value 1</p>
<p>[required]</p></th>
</tr>
</thead>
<tbody>
<tr>
<td>http://crm.free.nf/index.php</td>
<td>My CRM1</td>
<td>phone</td>
<td>{{NewPhoneContact.ANI}}</td>
</tr>
<tr>
<td><p>http://crm.iceiy.com/index.php</p>
<p>[backup]</p></td>
<td>My CRM2</td>
<td>phone</td>
<td>{{NewPhoneContact.ANI}}</td>
</tr>
</tbody>
</table></div>
<aside class="lab-note" role="note"><p><strong>Note:</strong></p>
<p>Only one Screen Pop URL can be configured per call queue, but each
call queue can have their own Screen Pop URL providing flexibility in
different Screen Pop application(s).</p>
<p>List of Values/Variables that can be used are listed here:</p>
<p><a href="https://help.webex.com/en-us/article/72sb3r/Webex-Calling-Customer-Assist#task-template_b70d32ce-9ddd-447a-b1f2-8ae99f961b69">https://help.webex.com/en-us/article/72sb3r/Webex-Calling-Customer-Assist#task-template_b70d32ce-9ddd-447a-b1f2-8ae99f961b69</a></p>
<p>ANI = phone number of the caller that initiate the call.</p></aside>
<p>Back to Customer Assist main dashboard, by selecting “Customer
Assist” in the Services section. Click on “Queues” tab.</p>
<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 79" class="screenshot-link" href="assets/images/image79.png"><img alt="Lab guide screenshot 79" class="lab-screenshot" height="826" loading="lazy" src="assets/images/image79.png" width="2166"/></a></figure>
<p>Follow the steps below to complete Screen Pop-up configuration for
each Call Queue:</p>
<ol type="1">
<li><p>Click on the queue to be configured, click on
“Q1_WebexCallingSupport”</p></li>
<li><p>Click on “Screen pop”</p></li>
</ol>

<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 91" class="screenshot-link" href="assets/images/image91.png"><img alt="Lab guide screenshot 91" class="lab-screenshot" height="400" loading="lazy" src="assets/images/image91.png" width="904"/></a></figure>

<ol start="3" type="1">
<li><p>Toggle the button icon to enable Screen pop
configuration</p></li>
</ol>

<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 92" class="screenshot-link" href="assets/images/image92.png"><img alt="Lab guide screenshot 92" class="lab-screenshot" height="160" loading="lazy" src="assets/images/image92.png" width="612"/></a></figure>

<ol start="4" type="1">
<li><p>Enter the configuration settings as below –</p></li>
</ol>
<ul>
<li><p>Screen Pop URL: <a href="http://crm.free.nf/index.php">http://crm.free.nf/index.php</a></p></li>
<li><p>Screen Pop Desktop Label: My CRM1</p></li>
<li><p>Click “Add New” under Query Parameter</p></li>
<li><p>Key 1: phone</p></li>
<li><p>Value1: {{NewPhoneContact.ANI}}</p></li>
</ul>

<figure class="lab-figure"><a aria-label="Enlarge Lab guide screenshot 93" class="screenshot-link" href="assets/images/image93.png"><img alt="Lab guide screenshot 93" class="lab-screenshot" height="429" loading="lazy" src="assets/images/image93.png" width="624"/></a></figure>
<p>Click “Save” to save and activate this Screen Pop setting.</p>
<p>By configuring screen pops, agents can quickly identify callers and
access their details, enabling more effective and personalized
service.</p>
<p>Return to the Queues list and select “Q2_WebexContactCenterSupport”.
Repeat steps 2–4 for that queue, then click “Save” to apply its Screen Pop settings.</p>

<p><strong>This completes the main portion of this lab: export, prep and
import of Auto Attendant and Queue configuration from Unified
Communications Manager and Unity Connection.</strong></p>
## Step 2: Other Advance Features {#step-2-other-advance-features}
<p>Due to the time constraints of this lab, many advanced features
offered under Customer Assist will not be covered. However, a brief
description and additional links for further details and configuration
steps are provided, allowing you to explore and implement them after
completing</p>
<div aria-label="Lab reference table" class="table-scroll" role="region" tabindex="0"><table>

<thead>
<tr>
<th>Features</th>
<th>Section</th>
<th>Brief Description</th>
<th>URL</th>
</tr>
</thead>
<tbody>
<tr>
<td>Call Back Option</td>
<td>Overview</td>
<td>The call back option allows callers to receive a call-back to the
phone number provided when their original position in the queue reaches.
The phone number is verified against a location’s outgoing calls
policy.</td>
<td rowspan="5"><a href="https://help.webex.com/en-us/article/72sb3r/Webex-Calling-Customer-Assist">Link</a></td>
</tr>
<tr>
<td>Wrap-up reasons</td>
<td>Overview</td>
<td>The wrap reason is a predefined label which helps agents to
summarize the purpose or outcome of their customer’s call. This record
helps the supervisors or managers to track the customer service
performance and monitor and improve agent performance.</td>
</tr>
<tr>
<td>Night Service</td>
<td>Queue Policies</td>
<td>Configure the queue to route calls differently during the hours when
the queue is not in service.</td>
</tr>
<tr>
<td>Estimated wait message for Queued Calls</td>
<td>Announcements</td>
<td>Notify the caller with either their estimated wait time in the
queue</td>
</tr>
<tr>
<td>Announce queue position</td>
<td>Announcements</td>
<td>Notify the caller with either their estimated position in the
queue</td>
</tr>
</tbody>
</table></div>
