<aura:application template="c:SLDTemplate">
    <aura:attribute name="id" type="Integer" default="1"/>
    <aura:attribute name="examples" type="Object[]" />

    <aura:attribute name="title" type="String" />
    <aura:attribute name="labels" type="Object" />

    <aura:attribute name="prevTitle" type="String" />
    <aura:attribute name="nextTitle" type="String" />

    <aura:handler name="init" value="{!this}" action="{!c.init}"/>

    <c:SamplesHeader title="{!v.title}"/>
    <div class="container">
		<ul class="slds-list--vertical slds-has-dividers--bottom-space slds-has-selection">
		  	<aura:iteration items="{!v.examples}" var="item">
				<li class="slds-list__item">
					<div class="slds-tile">
					    <p class="slds-tile__title slds-truncate">
					    	<a onclick="{!c.handleDialog}" data-item-id="{! item.id }" data-item-title="{! item.title }">
                                {! format(v.labels.rowTitle, v.id, item.id, item.title) }
                           	</a>
					    </p>
					    <div class="slds-tile__detail slds-text-body--small">
					      <p class="slds-truncate">{!item.title}</p>
					    </div>
					</div>
				</li>
		    </aura:iteration>
		</ul>
        <aura:if isTrue="{!v.prevTitle > ''}">
            <c:NavButton label="{!v.prevTitle}" floatdir="left" onclick="{!c.handlePrevSection}" />
        </aura:if>
        <aura:if isTrue="{!v.nextTitle > ''}">
			<c:NavButton label="{!v.nextTitle}" floatdir="right" onclick="{!c.handleNextSection}" />
        </aura:if>
	</div>
    
    <c:SamplesModal aura:id="modal"/>
</aura:application>