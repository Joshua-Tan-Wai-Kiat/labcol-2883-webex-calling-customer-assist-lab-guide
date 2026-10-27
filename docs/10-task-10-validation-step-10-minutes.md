# Task 10: Validation step [10 minutes] {#task-10-validation-step-10-minutes}

<p>We can now validate the Auto Attendant and Call Queues that we just
imported to Webex Calling Customer Assist.</p>

<ul>
<li><p>To perform the validation, login as Charles Holland, Anita Perez
and Taylor Bard with Webex app. Follow the table below on which
workstation to login for each user.</p></li>
<li><p>User ID and password can be found in <a href="10-task-10-validation-step-10-minutes.html#_Step_2:_Login">Task 1: Step 2 – Login Credentials for Control
Hub</a>.</p></li>
</ul>

<table style="width:100%;">
<colgroup>
<col style="width: 18%"/>
<col style="width: 35%"/>
<col style="width: 21%"/>
<col style="width: 25%"/>
</colgroup>
<thead>
<tr>
<th style="text-align: left;">User</th>
<th>Queue Name</th>
<th style="text-align: left;">Role</th>
<th style="text-align: left;">Workstation to use</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">Charles Holland</td>
<td>n/a</td>
<td>Caller / Customer</td>
<td style="text-align: left;">Walk-In-Lab PC</td>
</tr>
<tr>
<td style="text-align: left;">Anita Perez</td>
<td>Q1_WebexCallingSupport</td>
<td style="text-align: left;">Agent</td>
<td style="text-align: left;">Workstation 2</td>
</tr>
<tr>
<td style="text-align: left;">Taylor Bard</td>
<td>Q1_WebexCallingSupport<br/>
Q2_WebexContactCenterSupport</td>
<td style="text-align: left;">Supervisor</td>
<td style="text-align: left;">Workstation 1</td>
</tr>
</tbody>
</table>

### Step 1: Login to Webex app as Charles Holland {#step-1-login-to-webex-app-as-charles-holland}

<p>Launch the Webex app from the main desktop view on the
<strong>Walk-In-Lab PC</strong> by double-clicking the Webex app icon.
Alternatively, you can use your own PC, tablet, or smartphone.
<strong>Avoid using Charles Holland's Workstation1</strong>, as the
virtual PC in Expo lacks microphone input and may interfere with DTMF
digit recognition during greeting and menu selection.</p>

<p><img alt="Lab guide control icon 94" height="142" loading="lazy" src="assets/images/image94.png" style="max-width:100%;height:auto;max-height:32px;vertical-align:middle;width:auto;" width="132"/></p>

<p>Click the “Sign in” and use the user-id for the user as below:</p>

<p><strong>Control Hub and Webex app userid</strong>: <a href="mailto:cholland@cbxxx.dc-yy.com"><mark>cholland@cbxxx.dc-yy.com</mark></a>
(userid@<em>domain_name</em>)</p>

<p><strong>Control Hub password:</strong> <mark>[password from your assigned session]</mark>
(dCloud + <em>last four digits of session ID</em> + !)</p>

<blockquote>
<p>Refer to the “<strong>WEBEX_PASSWORD.txt</strong>” file (Task 1 –
Step 3, page 13) for the userid and password applicable for you
session.</p>
<p><img alt="Lab guide screenshot 95" height="252" loading="lazy" src="assets/images/image95.png" style="max-width:100%;height:auto;" width="336"/></p>
<p>Click the <strong>two</strong> <strong>checkboxes</strong> and select
“<strong>Allow Access</strong>” to continue if you encountered this
pop-up for Webex app – usually happened during first launch.</p>
<p><img alt="Lab guide screenshot 96" height="1046" loading="lazy" src="assets/images/image96.png" style="max-width:100%;height:auto;" width="1458"/></p>
<p>Click “Ok” to acknowledge Emergency Calling Notification warning.
Refer to the Appendix section to learn more about Emergency Calling for
Webex Calling [out of scope for this lab].</p>
</blockquote>

<p><img alt="Lab guide screenshot 97" height="552" loading="lazy" src="assets/images/image97.png" style="max-width:100%;height:auto;" width="606"/></p>

<blockquote>
<p>Charles Holland will simulate caller into our Support Desk queue and
is not configured for any Webex Calling Customer Assist features and
thus will not have Customer Assist option available under Webex app.</p>
<p><img alt="Lab guide screenshot 98" height="325" loading="lazy" src="assets/images/image98.png" style="max-width:100%;height:auto;" width="912"/></p>
</blockquote>

### Step 2: Login to Webex app as Anita Perez {#step-2-login-to-webex-app-as-anita-perez}

<p>Logged in to Webex app in Workstation 2 as Anita Perez from Expo web
browser portal.</p>

<p>Once logged in you would notice Anita Perez has additional option
available under Webex app. Click “Customer Assist” on the left column of
Webex app, which will show the Queue assignment and status Available in
the left bottom.</p>

<p><img alt="Lab guide screenshot 99" height="2008" loading="lazy" src="assets/images/image99.png" style="max-width:100%;height:auto;" width="2908"/></p>

### Step 3: Call-in to Auto Attendant x6500 {#step-3-call-in-to-auto-attendant-x6500}

<p>Use Charle Holland Webex app to make a call to Auto Attendant (x6500)
for Support Desk menu option. Verify that Charles Holland is logged in
to Webex app from <strong>Walk-in Lab PC</strong>.</p>

<p>Click on “Calling” button and type-in 6500 either 1] on the “Search
or Dial” or 2] by pressing the dialer pad.</p>

<p><img alt="Lab guide screenshot 103" height="384" loading="lazy" src="assets/images/image103.png" style="max-width:100%;height:auto;" width="612"/></p>

<p>Press the “handset” icon to initiate the call.</p>

<table>
<colgroup>
<col style="width: 50%"/>
<col style="width: 50%"/>
</colgroup>
<thead>
<tr>
<th style="text-align: left;">Typing 6500 in the “Search or dial”</th>
<th style="text-align: left;">Pressing 6500 on the Dialer pad</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><img alt="Lab guide screenshot 104" height="540" loading="lazy" src="assets/images/image104.png" style="max-width:100%;height:auto;" width="336"/></td>
<td style="text-align: center;"><img alt="Lab guide screenshot 105" height="540" loading="lazy" src="assets/images/image105.png" style="max-width:100%;height:auto;" width="328"/></td>
</tr>
</tbody>
</table>

<p>A call window will pop-up and you will hear the greeting audio file
that was uploaded earlier. Click on the dialer pad icon <img alt="Lab guide control icon 106" height="100" loading="lazy" src="assets/images/image106.png" style="max-width:100%;height:auto;max-height:32px;vertical-align:middle;width:auto;" width="90"/>
and press “1” to choose Q1_WebexCallingSupport.</p>

<p><img alt="Lab guide screenshot 107" height="454" loading="lazy" src="assets/images/image107.png" style="max-width:100%;height:auto;" width="748"/></p>

<table style="width:100%;">
<colgroup>
<col style="width: 11%"/>
<col style="width: 88%"/>
</colgroup>
<thead>
<tr>
<th></th>
<th><p><strong>Note:</strong></p>
<p><strong>OPTIONAL</strong> – To test call-ins from US PSTN numbers,
you can assign the dCloud main location PSTN number to the Auto
Attendant while keeping the extension set to 6500. To locate the main
number for the location, go to the "Calling" section and select
"Numbers".</p>
<p><img alt="Lab guide screenshot 108" height="171" loading="lazy" src="assets/images/image108.png" style="max-width:100%;height:auto;" width="804"/></p>
<p><img alt="Lab guide screenshot 109" height="282" loading="lazy" src="assets/images/image109.png" style="max-width:100%;height:auto;" width="612"/></p></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>

### Step 4: Agent Experience for Customer Assist {#step-4-agent-experience-for-customer-assist}

<p><strong>Live Queue Status:</strong></p>

<blockquote>
<p>Leave the call rings and let’s quickly review the available queue
status that both Agents and Supervisors can monitor in “Customer Assist”
tab. It provides live Queue status for number of calls in queue, number
of agents available, list of queues.</p>
<p><img alt="Lab guide screenshot 110" height="1660" loading="lazy" src="assets/images/image110.png" style="max-width:100%;height:auto;" width="3072"/></p>
</blockquote>

<p><strong>Answering the Call:</strong></p>

<blockquote>
<p>Goto Anita Perez Workstation and you could see the call alerting
window. Answer the call by selecting “Answer”</p>
<p><img alt="Lab guide screenshot 111" height="441" loading="lazy" src="assets/images/image111.png" style="max-width:100%;height:auto;" width="932"/></p>
<p>As this lab is running on virtual machine, you will get “No
microphone found” warning when the call is connected to Webex app. Just
ignore it and click “Ok” to continue interaction on Webex app.</p>
<p><img alt="Lab guide screenshot 112" height="1030" loading="lazy" src="assets/images/image112.png" style="max-width:100%;height:auto;" width="1684"/></p>
</blockquote>

<p><strong>Screen Pop:</strong></p>

<blockquote>
<p>As soon as the call is answered, screen pop in the form of a new
browser window will display with the caller details.</p>
<p><img alt="Lab guide screenshot 113" height="278" loading="lazy" src="assets/images/image113.png" style="max-width:100%;height:auto;" width="904"/></p>
</blockquote>

### Step 5: Supervisor Experience for Customer Assist {#step-5-supervisor-experience-for-customer-assist}

<p>If you have time, you can login as Supervisor Taylor Bard from
Workstation 1 and login to Webex app to experience the Supervisor
functions and monitoring capabilities.</p>

<p><strong>Agents Monitoring and Agents Status change:</strong></p>

<p><img alt="Lab guide screenshot 114" height="234" loading="lazy" src="assets/images/image114.png" style="max-width:100%;height:auto;" width="948"/></p>

<blockquote>
<p>In this view, Supervisor can perform the following actions:</p>
</blockquote>

<table>
<colgroup>
<col style="width: 13%"/>
<col style="width: 86%"/>
</colgroup>
<thead>
<tr>
<th style="text-align: center;"><img alt="Lab guide control icon 115" height="22" loading="lazy" src="assets/images/image115.jpeg" style="max-width:100%;height:auto;max-height:32px;vertical-align:middle;width:auto;" width="23"/></th>
<th>Monitor: listen in to a conversation between an agent and a customer
in real time.</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;"><img alt="Lab guide control icon 116" height="22" loading="lazy" src="assets/images/image116.jpeg" style="max-width:100%;height:auto;max-height:32px;vertical-align:middle;width:auto;" width="23"/></td>
<td>Chat: chat with an agent, you can send and receive messages directly
with them.</td>
</tr>
<tr>
<td style="text-align: center;"><img alt="Lab guide control icon 117" height="30" loading="lazy" src="assets/images/image117.jpeg" style="max-width:100%;height:auto;max-height:32px;vertical-align:middle;width:auto;" width="35"/></td>
<td>Manage: join or unjoin agents from a queue. When agents join queues
and are available, they start to receive calls.</td>
</tr>
<tr>
<td style="text-align: center;"><img alt="Lab guide control icon 118" height="40" loading="lazy" src="assets/images/image118.jpeg" style="max-width:100%;height:auto;max-height:32px;vertical-align:middle;width:auto;" width="40"/></td>
<td>Change agent status: Choose whether your agents are available or
unavailable to take calls in their queues</td>
</tr>
</tbody>
</table>

<blockquote>
<p>See appendix for additional resources for “Get started with Webex
Calling Customer Assist for Supervisors”.</p>
</blockquote>

<p><strong>Agents Historical Statistics:</strong></p>

<blockquote>
<p><img alt="Lab guide screenshot 119" height="540" loading="lazy" src="assets/images/image119.png" style="max-width:100%;height:auto;" width="548"/></p>
<p>This view can be filtered by: Agent name, Queue name, or Location
name.</p>
</blockquote>

<p><strong>Queues Realtime:</strong></p>

<blockquote>
<p>This is a similar view to Agent Experience for Customer Assist in
Step 4 above.</p>
</blockquote>

<p><strong><br/>
</strong></p>

<p><strong>Queues Historical Statistics</strong></p>

<blockquote>
<p><img alt="Lab guide screenshot 120" height="540" loading="lazy" src="assets/images/image120.png" style="max-width:100%;height:auto;" width="576"/></p>
<p>This view can be filtered by: Queue name.</p>
</blockquote>

<p><strong>Congratulations, you completed the main portion of this
lab.</strong></p>
