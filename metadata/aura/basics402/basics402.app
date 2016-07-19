<aura:application controller="echoController" template="c:SLDTemplate">

    <aura:attribute name="echoes" type="String[]"/>

    <div class="slds-grid slds-wrap container">
        <div class="slds-size--3-of-12">Foreground Action</div>
        <div class="slds-size--3-of-12">Background Action</div>
        <div class="slds-size--3-of-12">Storable Action</div>
        <div class="slds-size--3-of-12">Abortable Action</div>
        <div class="slds-size--3-of-12">
            <ui:button label="Generate Echo" press="{!c.doForeground}"/>
        </div>
        <div class="slds-size--3-of-12">
            <ui:button label="Generate Echo" press="{!c.doBackground}"/>
        </div>
        <div class="slds-size--3-of-12">
           <ui:button label="Generate Echo" press="{!c.doStorable}"/>
        </div>
        <div class="slds-size--3-of-12">
           <ui:button label="Generate Echo" press="{!c.doAbortable}"/>
        </div>
    </div>

    <ul class="" role="presentation">
        <aura:iteration items="{!v.echoes}" var="echo">
            <c:EchoComponent echo="{!echo}" />
        </aura:iteration>
    </ul>

    <aura:if isTrue="{! v.echoes.length &gt; 0 }">
           <ui:button label="Clear" press="{!c.doClear}"/>
    </aura:if>

    <auraStorage:init name="actions" persistent="false" clearStorageOnInit="true" defaultExpiration="30"/>

</aura:application>